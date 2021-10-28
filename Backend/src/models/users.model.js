const DBConnection = require('../db/db-connection')
const { multipleColumnSet } = require('../utils/common.utils')

const isEmptyUser = async (params) => {
  const { columnSet, values } = multipleColumnSet(params)
  const sql = `SELECT * FROM users WHERE ${columnSet}`
  const result = await DBConnection.query(sql, [...values])
  if (result.length === 0) {
    return {
      state: false,
      user: [],
    }
  }
  return {
    state: true,
    user: result[0],
  }
}

const onCreate = async (params) => {
  const sql = `INSERT INTO users 
              (firstname, lastname, email, password, role, code) VALUES (?,?,?,?,?,?)`
  const result = await DBConnection.query(sql, [
    params.firstname,
    params.lastname,
    params.email,
    params.password,
    params.role,
    params.code,
  ])
  const affectedRows = result ? result.affectedRows : 0
  return affectedRows
}

const onUpdateProfile = async (params) => {
  const sql = `UPDATE users SET firstname = ?, lastname = ?, skill = ?, club = ?, gender = ?, zipcode = ?, phone = ?, birth = ? WHERE id = ?`
  try {
    await DBConnection.query(sql, [
      params.firstname,
      params.lastname,
      params.skill,
      params.club,
      params.gender,
      params.zipcode,
      params.phone,
      params.birth,
      params.currentUser,
    ])
    return true
  } catch (e) {
    return false
  }
}

const onGetProgile = async (params) => {
  const sql = `SELECT * FROM users WHERE id = ?`
  try {
    const item = await DBConnection.query(sql, [params.currentUser])
    return { state: true, item: item[0] }
  } catch (e) {
    return { state: false, item: null }
  }
}

const onUpdateAccount = async (params) => {
  const sql = `UPDATE users SET password = ? WHERE id = ?`
  try {
    await DBConnection.query(sql, [params.password, params.currentUser])
    return true
  } catch (e) {
    return false
  }
}
/***********************************Export*******************************************/
module.exports = {
  isEmptyUser,
  onCreate,
  //
  onUpdateProfile,
  onGetProgile,
  //
  onUpdateAccount,
}
