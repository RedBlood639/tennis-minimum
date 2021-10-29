const express = require('express')
const router = express.Router()
const leagueController = require('../controllers/league.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', awaitHandlerFactory(leagueController.onCreateLeague))
router.get('/', awaitHandlerFactory(leagueController.onGetLeagues))
router.delete('/:id', awaitHandlerFactory(leagueController.onRemoveItem))
/***********************************Export*******************************************/
module.exports = router
