const DBConnection = require('../db/db-connection')
const dotenv = require('dotenv')
const { isEmpty } = require('../utils/isempty.utils')

dotenv.config()

const onCreateRoster = async (params) => {
  const sql = `INSERT INTO roster 
              (title, position) VALUES (?,?)`
  const result = await DBConnection.query(sql, [params.title, params.position])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const onGetRoster = async () => {
  const sql = `SELECT id, title, position FROM roster WHERE isDisable = 1`
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
  const sql = `UPDATE roster SET isDisable = 0 WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.id])
    return true
  } catch (e) {
    return false
  }
}

const onAddMembers = async (params) => {
  const sql = `UPDATE roster SET members = ? WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.members, params.id])
    return true
  } catch (e) {
    return false
  }
}

const onGetMembers = async (params) => {
  const sql = `SELECT * FROM users WHERE isDisable = 1`
  try {
    const result = await DBConnection.query(sql)
    const sql_1 = `SELECT * FROM roster WHERE id = ?`
    const result_1 = await DBConnection.query(sql_1, [params.id])

    let members = result_1[0].members
    if (isEmpty(members)) {
      members = []
    } else {
      members = JSON.parse(result_1[0].members)
    }
    const data_1 = []
    await result.map((item) => {
      if (!members.includes(item.id)) {
        data_1.push(item)
      }
    })

    const sql_2 = `SELECT * FROM users WHERE id = ?`
    const data_2 = []
    await members.map(async (item) => {
      const result_2 = await DBConnection.query(sql_2, [item])
      data_2.push(result_2[0])
    })

    return {
      state: true,
      allmembers: data_1,
      members: data_2,
      detail: result_1[0],
    }
  } catch (e) {
    console.log(e)
    return {
      state: false,
      allmembers: null,
      members: null,
      detail: null,
    }
  }
}
/***********************************Export*******************************************/
module.exports = {
  onCreateRoster,
  onGetRoster,
  onRemoveItem,
  onAddMembers,
  onGetMembers,
}
