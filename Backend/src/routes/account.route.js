const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')

router.put('/', auth(), awaitHandlerFactory(accountController.onUpdateAccount))

/***********************************Export*******************************************/
module.exports = router
