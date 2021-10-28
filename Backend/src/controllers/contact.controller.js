const HttpException = require('../middleware/HttpException.middleware')
const ContactModel = require('../models/contact.model')
const { Sendsmtp } = require('../utils/verification.utils')
const onSendMessage = async (req, res, next) => {
  console.log(req.body)
  const flag = await ContactModel.onCreateContact(req.body)
  if (!flag) {
    throw new HttpException(500, 'Something went wrong.')
  }

  const rand = await Sendsmtp(req.body.email1, 'contact', req.body.description)
  if (!rand.state) {
    throw new HttpException(500, 'Something went wrong.')
  }

  res.send({ success: true, message: 'Success !' })
}

module.exports = {
  onSendMessage,
}
