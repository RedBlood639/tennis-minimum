const multipleColumnSet = (object) => {
  if (typeof object !== 'object') {
    throw new Error('Invalid input')
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  columnSet = keys.map((key) => `${key} = ?`).join(', ')

  return {
    columnSet,
    values,
  }
}
const multipleParamSet = (object) => {
  if (typeof object !== 'object') {
    throw new Error('Invalid input')
  }

  const keys = Object.keys(object)
  const values = Object.values(object)

  columnSet = keys.map((key) => `${key}`).join(', ')

  return {
    keys,
    values,
  }
}
module.exports = {
  multipleColumnSet,
  multipleParamSet,
}
