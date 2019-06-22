var students = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

//Creo función constructora Student. Dentro tengo propiedades privadas declaradas con LET
//también métodos para esa propiedad

function Student(firstName, lastName, dni, email) {
  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email
  let id = Math.random
  this.getId = function () {
    return id
  }
}

//Creo un método para las propiedades publicas usando prototype

Student.prototype.getFullName = function () {
  if (this.firstName && this.lastName) {
    return this.firstName + " " + this.lastName
  }
}

//Crear tres alumnos usando los datos de prueba y probar sus métodos.

let alumnos = []

for (let i = 0; i < students.length; i++) {
  alumnos.push(new Student(students[i].firstName, students[i].lastName, students[i].dni, students[i].email))
}