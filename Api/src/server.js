const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
//import  middleware
const HttpException = require('./middleware/HttpException.middleware')
const errorMiddleware = require('./middleware/error.middleware')
//import user router
const users = require('./routes/users.route')
const profile = require('./routes/profile.route')
const account = require('./routes/account.route')
const contact = require('./routes/contact.route')
const match = require('./routes/match.route')
const teamroster = require('./routes/teamroster.route')
const members = require('./routes/members.route')
const lineup = require('./routes/lineup.route')
//Init App
const app = express()

app.options('*', cors())
app.use(cors())
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Enable pre-flight

app.use('/users', users)
app.use('/profile', profile)
app.use('/account', account)
app.use('/contact', contact)
app.use('/match', match)
app.use('/teamroster', teamroster)
app.use('/members', members)
app.use('/lineup', lineup)

app.all('*', (req, res, next) => {
  const error = new HttpException(404, 'Endpoint Not Found.')
  next(error)
})
// Error middleware
app.use(errorMiddleware)
// set port, listen for requests
const PORT = process.env.SERVERPORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
/***********************************Export*******************************************/
module.exports = app
