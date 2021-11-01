const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
// #
const Transportsmtp = nodemailer.createTransport(
  smtpTransport({
    service: 'Gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  }),
)

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
    const mailOption = {
      to: email,
      subject:
        type == 'signup'
          ? 'Please confirm your Email account'
          : type == 'contact'
          ? 'Contact'
          : 'Forgot your password? It happends to the bet of us.',
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
    // ### Test smtp URL
    console.log(link, mailOption)
    return {
      state: true,
    }
    // await Transportsmtp.sendMail(mailOption, (error, response) => {
    //   if (error) {
    //     return {
    //       state: false,
    //     };
    //   } else {
    //     return {
    //       state: true,
    //     };
    //   }
    // });
  } catch (e) {
    console.log(e)
    return {
      state: false,
    }
  }
}
module.exports = {
  Sendsmtp,
}
