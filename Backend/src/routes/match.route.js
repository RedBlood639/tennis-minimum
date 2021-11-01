const express = require('express')
const router = express.Router()
const matchController = require('../controllers/match.controller')
const auth = require('../middleware/auth.middleware')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', auth(), awaitHandlerFactory(matchController.onCreateMatch))
router.get('/', auth(), awaitHandlerFactory(matchController.onGetMatches))
router.delete('/:id', auth(), awaitHandlerFactory(matchController.onRemoveItem))
/***********************************Export*******************************************/
module.exports = router
