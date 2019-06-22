function buscarAlumnoPorNombre(nombre, listaAlumnos) {
  var nombreLower = nombre.toLowerCase();
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower) {
      return i
    }
  }
  return -1
}

function buscarAlumnoPorNombreYApellido(nombre, apellido, listaAlumnos) {
  var nombreLower = nombre.toLowerCase();
  var apellidoLower = apellido.toLowerCase();
  for (var i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].firstName.toLowerCase() === nombreLower &&
      listaAlumnos[i].lastName.toLowerCase() === apellidoLower) {
      return i
    }
  }
  return -1
}


var studentsList = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]
var nombre = prompt('Ingrese nombre: ')
var apellido = prompt('Ingrese apellido: ')
var posicion = buscarAlumnoPorNombreYApellido(nombre, apellido, studentsList);
console.log(posicion)