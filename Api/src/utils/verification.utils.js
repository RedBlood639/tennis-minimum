const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const dotenv = require('dotenv')
dotenv.config()

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRETE,
  'https://developers.google.com/oauthplayground',
)

oauth2Client.setCredentials({
  refresh_token: process.env.RRESH_TOKEN,
})

const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.USER_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRETE,
    refreshToken: process.env.RRESH_TOKEN,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

const hashToken = async (params) => {
  const token = await jwt.sign(
    {
      rand: params.random,
      email: params.email,
    },
    process.env.SECRET_JWT,
    {
      expiresIn: '1h',
      algorithm: 'HS256',
    },
  )
  return token
}

const Sendsmtp = async (email, type, random) => {
  let link
  try {
    token = await hashToken({ random, email })
    if (type === 'signup') {
      link = process.env.CLIENTURL + `/verify?token=${token}`
    } else {
      link = ''
    }

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject:
        type == 'signup'
          ? 'Please confirm your Email account'
          : type == 'contact'
          ? 'Contact'
          : 'Forgot your password? It happends to the bet of us.',
      generateTextFromHTML: true,
      html:
        type == 'signup'
          ? `
        Hello,
        <br> Please Click on the link to verify your email.
        <br>
        <a href="${link}">Click here to verify</a>`
          : type === 'contact'
          ? `<h2>Description</h2><p>${random}</p>`
          : `To reset your password, Your Password is.
          <br>
          <p>${random}</p>`,
    }
    await smtpTransport.sendMail(mailOptions, (error, response) => {
      error ? console.log(error) : console.log(response)
      smtpTransport.close()
    })
    return true
  } catch (e) {
    return {
      state: false,
    }
  }
}
module.exports = {
  Sendsmtp,
}
