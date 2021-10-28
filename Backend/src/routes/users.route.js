const express = require('express')
const router = express.Router()
//import userController
const userController = require('../controllers/users.controller')
const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

// POST ==> user/signup
router.post('/signup', awaitHandlerFactory(userController.onCreateUser))
router.post('/siginin', awaitHandlerFactory(userController.onLoginUser))

/***********************************Export*******************************************/
module.exports = router
