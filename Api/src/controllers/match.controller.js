const HttpException = require('../middleware/HttpException.middleware')
const MatchModel = require('../models/match.model')
/***********************************Export*******************************************/
const onCreateMatch = async (req, res, next) => {
  let flag = false
  if (req.body.id === 0) {
    flag = await MatchModel.onCreateMatch(req.body)
  } else {
    flag = await MatchModel.onUpdateMatch(req.body)
  }

  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onGetMatches = async (req, res, next) => {
  const result = await MatchModel.onGetMatches()
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, item: result.item })
}

const onRemoveItem = async (req, res, next) => {
  const flag = await MatchModel.onRemoveItem(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

module.exports = { onCreateMatch, onGetMatches, onRemoveItem }
