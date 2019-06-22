let referencia = prompt('Ingrese el nombre o apellido a buscar')

function buscaIgual(base, refer) {
  let pos = -1
  for (let i = 0; i < base.length; i++) {

    if (base[i].firstName === refer || base[i].lastName === refer) {
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


console.log('la posición de la persona es  ' + buscaIgual(studentsList, referencia))