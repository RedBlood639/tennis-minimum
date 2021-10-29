const HttpException = require('../middleware/HttpException.middleware')
const LeagueModel = require('../models/league.model')
/***********************************Export*******************************************/
const onCreateLeague = async (req, res, next) => {
  const flag = await LeagueModel.onCreateLeague(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

const onGetLeagues = async (req, res, next) => {
  const result = await LeagueModel.onGetLeagues()
  if (!result.state) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, item: result.item })
}

const onRemoveItem = async (req, res, next) => {
  const flag = await LeagueModel.onRemoveItem(req.params)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }
  res.send({ success: true, message: 'Success !' })
}

module.exports = { onCreateLeague, onGetLeagues, onRemoveItem }
