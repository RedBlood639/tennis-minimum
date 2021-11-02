const HttpException = require('../middleware/HttpException.middleware')
const Model = require('../models/lineup.model')

const onCreate = async (req, res, next) => {
  const flag = await Model.onCreate(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onGetItems = async (req, res, next) => {
  const result = await Model.onGetItems()
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, item: result.item })
}

const onRemoteItem = async (req, res, next) => {
  const flag = await Model.onRemoteItem(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onGetMembers = async (req, res, next) => {
  const result = await Model.onGetMembers(req.query)
  if (!result.state) {
    throw new HttpException(401, 'Something went wrong.')
  }

  res.send({ success: true, message: 'Success !', item: result })
}

const onRemoveMember = async (req, res, next) => {
  const flag = await Model.onRemoveMember(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onUpdateDetail = async (req, res, next) => {
  const flag = await Model.onUpdateDetail(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onAddMembers = async (req, res, next) => {
  const flag = await Model.onAddMembers(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

module.exports = {
  onCreate,
  onGetItems,
  onRemoteItem,

  //#
  onGetMembers,
  onRemoveMember,
  onUpdateDetail,
  onAddMembers
}
