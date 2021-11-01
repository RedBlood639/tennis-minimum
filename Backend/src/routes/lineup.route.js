const express = require('express')
const router = express.Router()
const Controller = require('../controllers/lineup.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')
const auth = require('../middleware/auth.middleware')

router.post('/', auth(), awaitHandlerFactory(Controller.onCreate))
router.get('/', auth(), awaitHandlerFactory(Controller.onGetItems))
router.delete('/:id', auth(), awaitHandlerFactory(Controller.onRemoteItem))

router.get('/member', auth(), awaitHandlerFactory(Controller.onGetMembers))
router.delete(
  '/member/:userid/:lineupid',
  auth(),
  awaitHandlerFactory(Controller.onRemoveMember),
)
router.put('/detail', auth(), awaitHandlerFactory(Controller.onUpdateDetail))
router.post('/member', auth(), awaitHandlerFactory(Controller.onAddMembers))

/***********************************Export*******************************************/
module.exports = router
