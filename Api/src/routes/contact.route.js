const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contact.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', awaitHandlerFactory(contactController.onSendMessage))

/***********************************Export*******************************************/
module.exports = router
