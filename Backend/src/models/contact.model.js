const DBConnection = require('../db/db-connection')
const dotenv = require('dotenv')
dotenv.config()

const onCreateContact = async (params) => {
  console.log(process.env.ADMINEMAIL)
  const sql = `INSERT INTO contact 
              (name, clientemail, adminemail, desription) VALUES (?,?,?,?)`
  const result = await DBConnection.query(sql, [
    params.name,
    params.email1,
    process.env.USER_EMAIL,
    params.description,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

/***********************************Export*******************************************/
module.exports = {
  onCreateContact,
}
