const mysql2 = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
/******************************db connection*******************************************/
const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
})
const checkConnection = () => {
  db.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
      }
    }
    if (connection) {
      connection.release()
    }
    return
  })
}
const query = async (sql, values) => {
  checkConnection()
  return new Promise((resolve, reject) => {
    const callback = (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    }
    db.execute(sql, values, callback)
  }).catch((err) => {
    const mysqlErrorList = Object.keys(HttpStatusCodes)
    err.status = mysqlErrorList.includes(err.code)
      ? HttpStatusCodes[err.code]
      : err.status

    throw err
  })
}
const HttpStatusCodes = Object.freeze({
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
  ER_DUP_ENTRY: 409,
})
/***********************************Export*******************************************/
module.exports = {
  query,
}
