const DBConnection = require('../db/db-connection')

const onGetMembers = async () => {
  const sql = `SELECT * FROM users`
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

const onUpdate = async (params) => {
  const sql = `UPDATE users SET isDisable = ? WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.id, params.userid])
    return true
  } catch (e) {
    return false
  }
}
/***********************************Export*******************************************/
module.exports = {
  onGetMembers,
  onUpdate,
}
