const express = require('express')
const router = express.Router()
const Controller = require('../controllers/teamroster.controller')

const awaitHandlerFactory = require('../middleware/awaitHandler.middleware')

router.post('/', awaitHandlerFactory(Controller.onCreateRoster))
router.get('/', awaitHandlerFactory(Controller.onGetRoster))
router.delete('/:id', awaitHandlerFactory(Controller.onRemoveItem))
router.put('/detail', awaitHandlerFactory(Controller.onUpdateDetail))
// #
router.post('/member', awaitHandlerFactory(Controller.onAddMembers))
router.get('/member', awaitHandlerFactory(Controller.onGetMembers))
router.delete(
  '/member/:userid/:rosterid',
  awaitHandlerFactory(Controller.onRemoveMember),
)
/***********************************Export*******************************************/
module.exports = router
