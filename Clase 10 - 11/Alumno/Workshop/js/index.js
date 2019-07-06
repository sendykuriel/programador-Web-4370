window.onload = function () {

  //constantes
  const KEY_STORE = 'keyStore' //donde vamos a guardar la data en el local store

  //cargo los campos del formlario - traigo los elementos por id

  let nombre = document.getElementById("firstName")
  let apellido = document.getElementById("lastName")
  let dni = document.getElementById("dni")
  let email = document.getElementById("email")
  let mainList = document.getElementById("mainList")
  let deletDni = document.getElementById("deleteDni")
  let searchText = document.getElementById("searchText")
  let searchList = document.getElementById("searchList") //donde pongo los resultados
  //agrego botones
  let addStudentButton = document.getElementById("addStudentButton")
  let deleteStudenButton = document.getElementById("deleteStudentButton")
  let searchStudentButton = document.getElementById("searchStudentButton")


  //initialize

  addStudentButton.disabled = true //boton comienza deshabilitado 
  var dataStore = getDataStore(KEY_STORE) //--> entro con la key store que voy a usar (la definí como constante) // traigo la data a una variable
  renderStudents(mainList, dataStore) //pone los estudiantes que ya están en memoria, recibe el array y donde ponerlo  



  //validations & events
  nombre.onblur = validateNotEmpty
  apellido.onblur = validateNotEmpty
  dni.onblur = validateNotZero
  email.onblur = validateEmail
  addStudentButton.onclick = addStudent
  deleteStudenButton.onclick = deleteStudent
  searchStudentButton.onclick = searchStudent


  //Render functions 

  function renderStudents(list, studentsArray) {
    while (list.hasChildNodes()) { //de acá borro los nodos anteriore, para limpiar la screen 
      listo.removeChild(list.firstChild)
    }
    for (let i = 0; i < studentsArray.length; i++) {
      list.appendChild(createStudentNode(studentsArray[i]))
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
    item.id = student.dni //le pongo de Id el DNI :)
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
    if (!getLocalList(key)) { //!--> devuelve true
      setLocalList(key, []) //creo store con array vacío si el store no existe
    } else {
      return getLocalList(key)
    }
    return [] //--> devuelva el array vacío si no hay nada luego de crearlo
  }

  //data manipulation

  function addStudent() { //-funcion que se llama cuando aprieto el boton :) 
    console.log('hola')
    var student = getStudentFromForm() //esta funcion trae un objeto con los datos, y luego le hago push al array dataStore
    dataStore.push(student) //-->guardo los objetos en un array 
    //ahora actualizo el data store 
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
    deletDni.value = ''
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
    if (removeStudentFromDataStore(dataStore, deleteDni.value)) {
      //persistir datastore en local store --> set local list!
      setLocalList(KEY_STORE, dataStore)
      //limpio el formulario
      //remuevo el renderizado 
      let liToBeRemoved = document.getElementById(deleteDni.value) //recordar que cada Li creado le pusimos de ID su dni :)
      liToBeRemoved.remove()
    }
  }


  function searchStudent() {
    //tomo el texto que estoy buscando
    let textToBeSearched = searchText.value
    let studentsWhoMatchSearch = [] //-->aca guardo
    //busco el elemento en el datastore
    for (let i = 0; i < dataStore.length; i++) {
      let student = dataStore[i]
      let isInName = student.firstName.indexOf(textToBeSearched) > -1 //-->esto devuelve tru o false
      let isInLastName = student.lastName.indexOf(textToBeSearched) > -1 //-->esto devuelve tru o false
      let isInEmail = student.email.indexOf(textToBeSearched) > -1 //-->esto devuelve tru o false
      let isInDni = student.dni.indexOf(textToBeSearched) > -1 //-->esto devuelve tru o false
      if (isInDni === true || isInEmail === true || isInLastName === true || isInLastName === true) { //si se cumple, armo un array con los que matchearon
        studentsWhoMatchSearch.push(student)

      }

    }
    //llamo la función del renderizador
    renderStudents(searchList, studentsWhoMatchSearch)
  }



  function removeStudentFromDataStore(dataStore, dni) {
    for (let i = 0; i < dataStore.length; i++) {
      let student = dataStore[i];
      if (student.dni === dni) {
        dataStore.splice(i, 1);
        return true
      }
    }
    return false
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