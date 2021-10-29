const DBConnection = require('../db/db-connection')
const dotenv = require('dotenv')
dotenv.config()

const onCreateLeague = async (params) => {
  const sql = `INSERT INTO league 
              (title, position, time) VALUES (?,?,?)`
  const result = await DBConnection.query(sql, [
    params.title,
    params.position,
    params.time,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const onGetLeagues = async () => {
  const sql = `SELECT id, title, position, time FROM league WHERE isDisable = 1`
  try {
    const result = await DBConnection.query(sql)
    return {
      state: true,
      item: result,
    }
  } catch (e) {
    return {
      state: false,
      item: null,
    }
  }
}

const onRemoveItem = async (params) => {
  const sql = `UPDATE league SET isDisable = 0 WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.id])
    return true
  } catch (e) {
    return false
  }
}
/***********************************Export*******************************************/
module.exports = {
  onCreateLeague,
  onGetLeagues,
  onRemoveItem,
}
