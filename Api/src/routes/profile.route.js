const express = require('express')
const router = express.Router()
const profilController = require('../controllers/profile.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')

router.put('/', auth(), awaitHandlerFactory(profilController.onUpdateProfile))
router.get('/', auth(), awaitHandlerFactory(profilController.onGetProgile))

/***********************************Export*******************************************/
module.exports = router
