function setLocalList(key, data) {
  var valorKey = typeof key === 'string'
  if (!valorKey) {
    return false
  }
  var dataStr = JSON.stringify(data)
  localStorage.setItem(key, dataStr)
  return true
}

function getLocalList(key) {
  var nombreKey = typeof key === 'string'
  if (!nombreKey) {
    return false
  }
  var value = localStorage.getItem(key)
  if (!value) { // value === null
    return false
  }
  var parsedData = JSON.parse(value)
  return parsedData
}

export { getLocalList, setLocalList }