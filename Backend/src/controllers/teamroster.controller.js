const HttpException = require('../middleware/HttpException.middleware')
const Model = require('../models/teamroster.model')
/***********************************Export*******************************************/
const onCreateRoster = async (req, res, next) => {
  const flag = await Model.onCreateRoster(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}
// ##################################################
const onGetRoster = async (req, res, next) => {
  const result = await Model.onGetRoster()
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, item: result.item })
}
// ##################################################

const onUpdateDetail = async (req, res, next) => {
  const flag = await Model.onUpdateDetail(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}
// ##################################################

const onRemoveItem = async (req, res, next) => {
  const flag = await Model.onRemoveItem(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}
// ##################################################

const onAddMembers = async (req, res, next) => {
  const flag = await Model.onAddMembers(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

// ##################################################
const onGetMembers = async (req, res, next) => {
  const result = await Model.onGetMembers(req.query)
  if (!result.state) {
    throw new HttpException(401, 'Something went wrong.')
  }

  res.send({ success: true, message: 'Success !', item: result })
}

// ##################################################
const onRemoveMember = async (req, res, next) => {
  const flag = await Model.onRemoveMember(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

module.exports = {
  onCreateRoster,
  onGetRoster,
  onRemoveItem,
  onUpdateDetail,
  // #
  onAddMembers,
  onGetMembers,
  onRemoveMember,
  // #
}
