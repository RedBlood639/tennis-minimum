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
  try {
    const sql = `SELECT * FROM users WHERE isDisable = 1`
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

    const unresolvedPromises = members.map(async (n) => {
      const data = await DBConnection.query(sql_2, [n])
      return data[0]
    })
    const data_2 = await Promise.all(unresolvedPromises)

    const sql_3 = `SELECT * FROM league WHERE rosterid = ?`
    const result_3 = await DBConnection.query(sql_3, [result_1[0].id])

    return {
      state: true,
      allmembers: data_1,
      members: data_2,
      detail: result_1[0],
      // leagues: result_3,
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

const onRemoveMember = async (params) => {
  try {
    const sql_1 = `SELECT * FROM roster WHERE id = ?`
    const result_1 = await DBConnection.query(sql_1, [params.rosterid])
    let members = JSON.parse(result_1[0].members)
    members.splice(members.indexOf(Number(params.userid)), 1)
    //#
    const sql_2 = `UPDATE roster SET members = ? WHERE id = ?`
    await DBConnection.query(sql_2, [members, result_1[0].id])
    return true
  } catch (e) {
    return false
  }
}

const onUpdateDetail = async (params) => {
  try {
    const sql = `UPDATE roster SET title = ?, position = ? WHERE id = ?`
    await DBConnection.query(sql, [params.title, params.position, params.id])
    return true
  } catch (e) {
    return false
  }
}
/***********************************Export*******************************************/
module.exports = {
  onCreateRoster,
  onGetRoster,
  onRemoveItem,
  // #
  onAddMembers,
  onGetMembers,
  onRemoveMember,
  onUpdateDetail,
}
