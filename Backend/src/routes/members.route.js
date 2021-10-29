const express = require('express')
const router = express.Router()
//import userController
const memberController = require('../controllers/member.controller')
const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

// POST ==> user/signup
router.get('/', awaitHandlerFactory(memberController.onGetMembers))
// router.post('/siginin', awaitHandlerFactory(userController.onLoginUser))

/***********************************Export*******************************************/
module.exports = router
