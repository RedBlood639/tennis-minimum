const express = require('express')
const router = express.Router()
const matchController = require('../controllers/match.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', awaitHandlerFactory(matchController.onCreateMatch))
router.get('/', awaitHandlerFactory(matchController.onGetMatches))
router.delete('/:id', awaitHandlerFactory(matchController.onRemoveItem))
/***********************************Export*******************************************/
module.exports = router
