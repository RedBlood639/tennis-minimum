const express = require('express')
const router = express.Router()
//import userController
const memberController = require('../controllers/member.controller')
const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')

// POST ==> user/signup
router.get('/', auth(), awaitHandlerFactory(memberController.onGetMembers))
router.put(
  '/:id/:userid',
  auth(),
  awaitHandlerFactory(memberController.onUpdate),
)
// router.post('/siginin', awaitHandlerFactory(userController.onLoginUser))

/***********************************Export*******************************************/
module.exports = router
