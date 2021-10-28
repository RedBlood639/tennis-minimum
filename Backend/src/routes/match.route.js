const express = require('express')
const router = express.Router()
const matchController = require('../controllers/match.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')

router.put('/', auth(), awaitHandlerFactory(matchController.onCreateMatch))

/***********************************Export*******************************************/
module.exports = router
