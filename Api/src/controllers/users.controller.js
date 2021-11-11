const HttpException = require('../middleware/HttpException.middleware')
const UserModel = require('../models/users.model')
// const { Sendsmtp } = require('../utils/verification.utils')
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

  // const rand = await Sendsmtp(req.body.email, 'signup', code)
  // if (!rand.state) {
  //   throw new HttpException(500, 'Something went wrong.')
  // }

  res.send({ success: true, message: 'Success !' })
}

const onLoginUser = async (req, res, next) => {
  const result = await UserModel.isEmptyUser({ email: req.body.email })
  if (!result.state) {
    throw new HttpException(401, 'Incorrect account.')
  }
  if (result.user.isDisable === 0) {
    throw new HttpException(401, 'this account was disabled.')
  }

  if (result.user.code !== 22222) {
    throw new HttpException(401, 'The account was not verified.')
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

const onForgot = async (req, res) => {
  const result = await UserModel.isEmptyUser({ email: req.body.email })
  if (!result.state) {
    throw new HttpException(400, `Your account does not exist.`)
  }

  if (result.user.isDisable === 0) {
    throw new HttpException(401, 'this account was disabled.')
  }
  const code = Math.floor(1000 + Math.random() * 9000)

  const password = await bcrypt.hash(code.toString(), 8)

  const flag_1 = await UserModel.onForgot({ password, email: req.body.email })
  if (!flag_1) {
    throw new HttpException(500, `Something went wrong.`)
  }

  // const rand = await Sendsmtp(req.body.email, 'forgot', code)
  // if (!rand.state) {
  //   throw new HttpException(500, 'Something went wrong.')
  // }

  res.send({ success: true })
}

const onVerify = async (req, res, next) => {
  const { token } = req.body
  const decrypt = jwt.verify(token, process.env.SECRET_JWT)
  if (decrypt === null) {
    throw new HttpException(404, 'Warning URL')
  }

  const result = await UserModel.onVerify(decrypt)
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong1.')
  }
  if (result.item.code === 22222) {
    return res.send({ success: true, type: true })
  }
  if (result.item.code !== decrypt.rand) {
    throw new HttpException(500, 'Something went wrong2.')
  }
  const flag = UserModel.onVerifyUpdate(decrypt)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong3.')
  }
  res.send({ success: true, type: false })
}

const onLoginAdmin = async (req, res, next) => {
  const result = await UserModel.isEmptyUser({ email: req.body.email })
  if (!result.state) {
    throw new HttpException(401, 'Incorrect account.')
  }
  if (result.user.isDisable === 0) {
    throw new HttpException(401, 'this account was disabled.')
  }

  if (result.user.code !== 22222) {
    throw new HttpException(401, 'The account was not verified.')
  }

  if (result.user.role !== 'admin') {
    throw new HttpException('This is not admin account.')
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
/***********************************Export*******************************************/
module.exports = {
  onCreateUser,
  onLoginUser,
  onForgot,
  onVerify,
  onLoginAdmin,
}
