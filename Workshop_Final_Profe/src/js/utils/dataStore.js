import { getLocalList, setLocalList } from './localStorage'
const KEY_STORE = 'keyStore'

var dataStore = getDataStore(KEY_STORE)
console.log(dataStore)
function getDataStore(key) {
  var store = getLocalList(key)
  if (!store) {
    setLocalList(key, {})
  } else {
    return store
  }
  return {}
}

function savePerson(id, person) {
  dataStore[id] = person
  console.log(dataStore)
  setLocalList(KEY_STORE, dataStore)
}

function isSaved(id) {
  return !!dataStore[id]
}

export { savePerson, isSaved } 