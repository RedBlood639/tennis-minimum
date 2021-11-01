const HttpException = require('../middleware/HttpException.middleware')
const UserModel = require('../models/users.model')
const { Sendsmtp } = require('../utils/verification.utils')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const onCreateUser = async (req, res, next) => {
  const flag = await UserModel.isEmptyUser({ email: req.body.email })
  if (flag.state) {
    throw new HttpException(400, `This email already registered.`)
  }

  await hashPassword(req)
  const code = Math.floor(1000 + Math.random() * 9000)

  const data = {
    ...req.body,
    code,
  }

  const result = await UserModel.onCreate(data)
  if (!result) {
    throw new HttpException(500, 'Something went wrong.')
  }

  const rand = await Sendsmtp(req.body.email, 'signup', code)
  if (!rand.state) {
    throw new HttpException(500, 'Something went wrong.')
  }

  await createJWT(req, res)
}

const onLoginUser = async (req, res, next) => {
  const result = await UserModel.isEmptyUser({ email: req.body.email })
  if (!result.state) {
    throw new HttpException(401, 'Incorrect account.')
  }

  if (result.user.isDisable === 0) {
    throw new HttpException(401, 'this account was disabled.')
  }

  const isMatch = await bcrypt.compare(req.body.password, result.user.password)
  if (!isMatch) {
    throw new HttpException(401, 'Incorrect password.')
  }

  const token = jwt.sign(
    { user_id: result.user.id.toString() },
    process.env.SECRET_JWT,
    {
      expiresIn: '365d',
    },
  )
  res.send({
    success: true,
    message: 'Success !',
    token,
    email: req.body.email,
  })
}

// hash password if it exists
const hashPassword = async (req) => {
  if (req.body.password1) {
    req.body.password = await bcrypt.hash(req.body.password1, 8)
  }
}

const createJWT = async (req, res) => {
  const item = await UserModel.isEmptyUser({ email: req.body.email })
  if (!item.state) {
    throw new HttpException(400, 'Your account does not exist.')
  }

  const token = jwt.sign({ user_id: item.user.id }, process.env.SECRET_JWT, {
    expiresIn: '365d',
  })

  res.send({
    success: true,
    message: 'Success !',
    token,
    email: req.body.email,
  })
}
/***********************************Export*******************************************/
module.exports = {
  onCreateUser,
  onLoginUser,
}
