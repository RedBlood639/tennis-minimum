const HttpException = require('../middleware/HttpException.middleware')
const MatchModel = require('../models/match.model')
/***********************************Export*******************************************/
const onCreateMatch = async (req, res, next) => {
  console.log(req.body)
  res.send({ success: true, message: 'Success !' })
}

module.exports = { onCreateMatch }
