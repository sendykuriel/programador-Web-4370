$('document').ready(function () {

  //Forma abreviada: (por default sabe que es un Get)
  //CBK: call back --> LE PASO A LA FUNCIÓN GET DATA LA FUNCIÓN DE CALL BACK QUE ES LO QUE HARÁ CON LOS DATOS

  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  //en get data, CBK recibe, si sale bien (null,data), si sale mal (error)
  ////ESTANDAR DE JS: LAS FUNCIONES CALLBACK SIEMPRE PRIMERO LEE EL ERROR Y DESPUES LA DATA!
  //-->function (error, data)

  getData("https://swapi.co/api/people/5", function (error, data) {
    if (!error) { //caso que el erro es nul--> salió todo bien
      console.log(data)
    } else {
      console.error('falló el request wacho:' +
        error) //puedo hacer esto
    }
  })

  getData("https://swapi.co/api/people/500", function (error, data) {
    if (!error) { //caso que el erro es nul--> salió todo bien
      console.log(data)
    } else {
      console.error('falló el request wacho:' +
        error) //puedo hacer esto
    }
  })


  //separo el handleRequest para que quede más cómodo.

  function handleRequest(error, data) {
    if (!error) { //caso que el erro es nul--> salió todo bien
      console.log(data)
    } else {
      console.error('falló el request wacho:' +
        error) //puedo hacer esto
    }
  }

  function getPersonById(id, cb) {
    getData("https://swapi.co/api/people/" + id, cb)
  }


  getPersonById(5, handleRequest)


  //TRAER TODOS LOS PERSONAJES

  getData("https://swapi.co/api/people/", handlePagination)

  function handlePagination(error, data) {
    if (!error) { //caso que el erro es nul--> salió todo bien

      var results = data.results //data es un objeto, solo quiero el array de resultados
      for (let i = 0; i < results.length; i++) {
        var character = results[i]
        console.log(character.name)
      }
      if (data.next) { //si hay una página siguiente
        getData(data.next, handlePagination) //--Vuelvo a pedir data con el data.next :D
      }
    }
  }



})