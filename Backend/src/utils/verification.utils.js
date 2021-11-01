const jwt = require('jsonwebtoken')
const transporter = require('./transporter')
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
    await transporter
      .sendMail(mailOptions)
      .then(function (email) {
        res.status(200).json({ success: true, msg: 'Mail sent' })
      })
      .catch(function (exception) {
        console.log(exception)
        res.status(200).json({ success: false, msg: exception })
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
