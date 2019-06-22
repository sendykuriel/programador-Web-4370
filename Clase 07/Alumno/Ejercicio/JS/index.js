//La función tiene que recibir como parámetros una key y un Array y convertir el Array en JSON para guardarlo en el localStorge.La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.


function setLocalList(key, array) {
  if (array.isArray === false || typeof key !== 'string') {
    return false
  }

  value = JSON.stringify(array)
  localStorage.setItem(key, value)
}

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']
// Guarda la lista en el localStorage en formato JSON
setLocalList('studentsList', testList)