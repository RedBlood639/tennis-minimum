const express = require('express')
const router = express.Router()
//import userController
const userController = require('../controllers/users.controller')
const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

// POST ==> user/signup
router.post('/signup', awaitHandlerFactory(userController.onCreateUser))
router.post('/siginin', awaitHandlerFactory(userController.onLoginUser))
router.post('/siginin_admin', awaitHandlerFactory(userController.onLoginAdmin))
router.post('/forgot', awaitHandlerFactory(userController.onForgot))
router.post('/verify', awaitHandlerFactory(userController.onVerify))
/***********************************Export*******************************************/
module.exports = router
