const DBConnection = require('../db/db-connection')

const onCreateMatch = async (params) => {
  const sql = `INSERT INTO matches 
    (date, opponent, site, result) VALUES (?,?,?,?)`
  const result = await DBConnection.query(sql, [
    params.date,
    params.opponent,
    params.site,
    params.result,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const onUpdateMatch = async (params) => {
  const sql = `UPDATE matches SET date = ?, opponent = ?, site = ?, result = ? WHERE id = ?`
  try {
    await DBConnection.query(sql, [
      params.date,
      params.opponent,
      params.site,
      params.result,
      params.id,
    ])
    return true
  } catch (e) {
    return false
  }
}

const onGetMatches = async () => {
  const sql = `SELECT * FROM matches WHERE isDisable = ?`
  try {
    const result = await DBConnection.query(sql, [1])
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
  console.log(params)
  const sql = `DELETE FROM matches WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.id])
    return true
  } catch (e) {
    return false
  }
}

/***********************************Export*******************************************/
module.exports = {
  onCreateMatch,
  onUpdateMatch,
  onGetMatches,
  onRemoveItem,
}
