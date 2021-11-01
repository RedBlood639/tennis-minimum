const express = require('express')
const router = express.Router()
const Controller = require('../controllers/teamroster.controller')
const auth = require('../middleware/auth.middleware')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', auth(), awaitHandlerFactory(Controller.onCreateRoster))
router.get('/', auth(), awaitHandlerFactory(Controller.onGetRoster))
router.delete('/:id', auth(), awaitHandlerFactory(Controller.onRemoveItem))
router.put('/detail', auth(), awaitHandlerFactory(Controller.onUpdateDetail))
// #
router.post('/member', auth(), awaitHandlerFactory(Controller.onAddMembers))
router.get('/member', auth(), awaitHandlerFactory(Controller.onGetMembers))
router.delete(
  '/member/:userid/:rosterid',
  auth(),
  awaitHandlerFactory(Controller.onRemoveMember),
)
// #

/***********************************Export*******************************************/
module.exports = router
