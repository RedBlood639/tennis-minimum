const DBConnection = require('../db/db-connection')

const onGetMembers = async () => {
  const sql = `SELECT * FROM users WHERE isDisable = 1`
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

/***********************************Export*******************************************/
module.exports = {
  onGetMembers,
}
