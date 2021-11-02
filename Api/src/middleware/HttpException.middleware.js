class HttpException extends Error {
  constructor(status, message, data) {
    super(message)
    this.success = false
    this.status = status
    this.message = message
    this.data = data
  }
}

/***********************************Export*******************************************/
module.exports = HttpException
