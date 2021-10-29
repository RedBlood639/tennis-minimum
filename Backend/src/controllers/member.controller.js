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

module.exports = {
  onGetMembers,
}
