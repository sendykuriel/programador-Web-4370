// - Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo `<li>` con los datos del alumno.
window.onload = function () {

  var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }



  function createStudentNode(student) {

    let ul = document.getElementById('lista')

    //Creo Elementos

    let item = document.createElement('li')
    let nombre = document.createElement('h1')
    let dni = document.createElement('h3')
    let email = document.createElement('p')

    //Defino ID y Clases
    item.id = '22999333'
    item.className = 'list-group-item'

    //Defino Contenidos
    nombre.innerHTML = student.firstName + ' ' + student.lastName
    dni.innerHTML = 'DNI : ' + student.dni
    email.innerHTML = 'E-mail :' + student.email



    //Asigno Parentescos

    item.appendChild(nombre)
    item.appendChild(dni)
    item.appendChild(email)
    ul.appendChild(item)
    return item
  }


  createStudentNode(student)
}