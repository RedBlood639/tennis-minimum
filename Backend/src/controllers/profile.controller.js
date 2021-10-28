const HttpException = require('../middleware/HttpException.middleware')
const UserModel = require('../models/users.model')
/***********************************Export*******************************************/
const onUpdateProfile = async (req, res, next) => {
  const flag = await UserModel.onUpdateProfile(req.body)
  if (!flag) {
    throw new HttpException(401, 'Incorrect account.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onGetProgile = async (req, res, next) => {
  const result = await UserModel.onGetProgile(req.body)
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, item: result.item })
}

module.exports = {
  onUpdateProfile,
  onGetProgile,
}
