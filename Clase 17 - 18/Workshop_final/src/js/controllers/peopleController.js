import {
  savePerson
} from '../utils/dataStore'

let nextPage
let index
let characters


function peopleController() {
  console.log('Se cargo la pagina de people')
  $('#root').load('./partials/people.html', function () {
    addEventToSeeMoreButton()

    nextPage = 'https://swapi.co/api/people/'
    characters = {}
    index = 1
    $.ajax(nextPage)
      .done(handleData)
    //.fail()
  })
}



function handleData(data) {
  var people = data.results
  nextPage = data.next //es la url contenida en next en el objeto del API
  console.log(data)
  characters[id] = person //-> estoy pasando los datos al objeto, en la key=id
  for (let i = 0; i < people.length; i++) {
    var person = people[i]
    var id = getId(person)
    renderPerson('#tableBody', person, index)
    index++
  }
  var seeMoreButton = $('#seeMore')
  if (!nextPage) {
    seeMoreButton.hide() //Lo escondo si no hay next page
  }
  seeMoreButton.attr("disabled", false)
}

var dictionary = {
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul'
}


function getId(person) {
  return parseInt(person.url.split('/')[5])
}

function translateToSpanish(wordInEnglish) {
  var word = wordInEnglish.toLowerCase()
  var traduccion = dictionary[word]
  if (traduccion) {
    return traduccion
  }
  return word
}

function renderPerson(anclaSelector, person, id) {
  $(anclaSelector).append(
    `
        <tr id="person-${id}">
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button id="button-${id}" data-id=${id} type="button" class="btn btn-success btn-guardar">Guardar</button></td>
      </tr>
        `
  )
  addEventToSaveButton(`#button-id=${id}`)
}

function addEventToSeeMoreButton() {
  var button = $('#seeMore')
  button.click(function (event) {
    if (nextPage) {
      button.attr("disabled", true)
      $.ajax(nextPage)
        .done(handleData)
    }
  })


}

function addEventToSaveButton(selector) {

  var button = $(selector) //importante: trae el array, pero jquery me permite asignar el evento click a TODO el array sin llamarlo por posicion
  button.click(function (event) {
    var target = $(event.target)
    var id = target.attr('data-id')
    var trToRemove = $(`#person-${id}`)
    savePerson(id)
    trToRemove.remove()
    // guardar en el local storage la info de la persona
    // remover el elemento

  })


}

export default peopleController