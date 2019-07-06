window.onload = function () {

  //constantes
  const KEY_STORE = 'keyStore' //donde vamos a guardar la data en el local store

  //cargo los campos del formlario

  let nombre = document.getElementById("firstName")
  let apellido = document.getElementById("lastName")
  let dni = document.getElementById("dni")
  let email = document.getElementById("email")
  let mainList = document.getElementById("mainList")
  let deletDni = document.getElementById("deleteDni")



  //agrego botones
  let addStudentButton = document.getElementById("addStudentButton")
  let deleteStudenButton = document.getElementById("deleteStudentButton")

  //initialize

  addStudentButton.disabled = true //boton comienza deshabilitado 
  var dataStore = getDataStore(KEY_STORE) //--> entro con la key store que voy a usar (la definí como constante) // traigo la data a una variable
  renderStudents(mainList, dataStore) //pone los estudiantes que ya están en memoria, recibe el array y donde ponerlo  


  //Render functions 

  function renderStudents(ancla, studentsArray) {
    for (let i = 0; i < studentsArray.length; i++) {
      ancla.appendChild(createStudentNode(studentsArray[i]))
    }

  }

  function createStudentNode(student) {
    let ul = document.getElementById('mainList')

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


  //si la local lista está vacía, la inicializo con la key y un array vacío, y despues devuelve el array vacío (para guardarlo en la variable dataStore)

  function getDataStore(key) {
    if (!getLocalList(key)) {
      setLocalList(key, [])
    } else {
      return getLocalList(key)
    }
    return [] //--> devuelva el array vacío si no hay nada luego de crearlo
  }

  //data manipulation

  function addStudent() { //-funcion que se llama cuando aprieto el boton :) 
    console.log('hola')
    var student = getStudentFromForm() //esta funcion trae el objeto, y luego le hago push al array dataStore
    dataStore.push(student) //-->guardo los objetos en un array 
    //ahora lo persisto --> la mando al local store
    setLocalList(KEY_STORE, dataStore)
    clearStudentForm() //-->vuelvo a formulario vacío
    mainList.appendChild(createStudentNode(student)) //--->renderizo
    addStudentButton.disabled = true


  }

  function clearStudentForm() {
    nombre.value = ''
    apellido.value = ''
    dni.value = ''
    email.value = ''
  }



  function getStudentFromForm() { //-->retorna objeto con los campos del student
    return {
      firstName: nombre.value,
      lastName: apellido.value,
      dni: dni.value,
      email: email.value,
    }
  }


  function deleteStudent() {

    //tomo el valor del input dniDelete
    //buscar ese valor en el dataStorage  y si ese valor existe, lo tengo que borrar del array -->funcion removeStudentFromDataStore()
    //persistir datastore en local store --> set local list!
    //remover el student renderizado en el DOM --> para que sea mas facil, modificar el set en el HTML y que ponga el ID=DNI así es mas facil hacer un get element por DNI. Entonces var elementoARemover = document.getelementoyid("elnumerodedni y lusto")
    //usar: elementoARemover.remove (creo q es este)

  }


  function removeStudentFromDataStore() {
    //acá hago que recorra el ddats store y si el (donde dataStore(i) =student) student.dni === dni, entonces hago un recorte de ese array sacando ese coso, usar el splice!
    //uri: este código esta en el slack por si es dificil!!
  }



  //local storage functions
  function getLocalList(key) {

    if (typeof key !== 'string') {
      return false
    }
    let string = localStorage.getItem(key)
    if (string === null) {
      return false
    }
    return JSON.parse(string)
  }


  function setLocalList(key, array) {
    if (array.isArray === false || typeof key !== 'string') {
      return false
    }
    value = JSON.stringify(array)
    localStorage.setItem(key, value)
  }



  //validations & events
  nombre.onblur = validateNotEmpty
  apellido.onblur = validateNotEmpty
  dni.onblur = validateNotZero
  email.onblur = validateEmail
  addStudentButton.onclick = addStudent
  deleteStudenButton.onclick = deleteStudent



  //en cada onblur tengo que chequear si todos los demás campos están ok para habilitar el botón

  //VALIDACIONES


  function allValidationsOk(event) { //--> la voy a llamar en todos los onblur
    var allValids = document.getElementsByClassName("is-valid") //traigo el array
    if (allValids.length >= 4) {
      addStudentButton.disabled = false
    }

  }


  function dniExists(dni) {
    for (let i = 0; i < dataStore.length; i++) {
      if (dataStore[i].dni === dni) {
        return true
      }

    }
    return false
  }

  function validateNotEmpty(event) {
    let value = event.target.value
    if (stringIsNoEmpty(value)) {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    } else {
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid')
    }
    allValidationsOk()
  }


  //funcion para chequear string no empty
  function stringIsNoEmpty(string) {
    if (string.length > 0) {
      return true
    }
    return false
  }

  // Valido Email 

  function validateEmail(event) {
    let value = event.target.value
    if (value && value.indexOf("@") > -1 && value.indexOf(".") > -1) {

      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')

    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
    allValidationsOk()
  }

  //valido DNI >100.000 y es un numero 

  function validateNotZero(event) {
    let value = event.target.value
    let dni = parseInt(value)
    if (dni <= 100000 || isNaN(dni) || dniExists(value)) { //-->uso la función del dni existe acá, le paso value y no dni porq la funcion toma string
      event.target.classList.remove('is-valid')
      event.target.classList.add('is-invalid')
      event.target.value = '' //con esto lo setea en vacío si pone mail el número
    } else {
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')
    }
    allValidationsOk()
  }



}