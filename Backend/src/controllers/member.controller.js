const HttpException = require('../middleware/HttpException.middleware')
const memberModel = require('../models/member.model')
/***********************************Export*******************************************/
const onGetMembers = async (req, res, next) => {
  const result = await memberModel.onGetMembers()
  if (!result.state) {
    throw new HttpException(401, 'Something went wrong.')
  }

  res.send({ success: true, message: 'Success !', item: result.item })
}

const onUpdate = async (req, res, next) => {
  const flag = await memberModel.onUpdate(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}
module.exports = {
  onGetMembers,
  onUpdate,
}
