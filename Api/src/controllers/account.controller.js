const HttpException = require('../middleware/HttpException.middleware')
const UserModel = require('../models/users.model')
const bcrypt = require('bcryptjs')
/***********************************Export*******************************************/

const onUpdateAccount = async (req, res, next) => {
  const result = await UserModel.isEmptyUser({ id: req.body.currentUser })
  if (!result.state) {
    throw new HttpException(401, 'Incorrect account.')
  }

  const isMatch = await bcrypt.compare(req.body.oldPass, result.user.password)
  if (!isMatch) {
    throw new HttpException(401, 'Incorrect password.')
  }

  if (req.body.newPass) {
    req.body.password = await bcrypt.hash(req.body.newPass, 8)
  }

  const flag = await UserModel.onUpdateAccount(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }

  res.send({ success: true, message: 'Success !' })
}

module.exports = {
  onUpdateAccount,
}
