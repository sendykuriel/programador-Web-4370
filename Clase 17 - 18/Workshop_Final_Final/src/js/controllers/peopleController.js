import { savePerson, isSaved } from '../utils/dataStore'
import { translateToSpanish } from '../utils/dictionary'
import { getId } from '../utils/utils'

var nextPage
var index
var characters

function peopleController() {
  $('#root').load('./partials/people.html', function () {
    addEventToSeeMoreButton()
    nextPage = 'https://swapi.co/api/people/'
    index = 1
    characters = {}
    $.ajax(nextPage)
      .done(handleData)
    //.fail(function)
  })
}

function handleData(data) {
  var people = data.results
  nextPage = data.next
  console.log(data)
  for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var id = getId(person)
    characters[id] = person
    if (!isSaved(id)) {
      renderPerson('#tableBody', person, id)
    }
  }

  if (!nextPage) {
    $('#seeMore').hide()
  }
  $('#seeMore').attr("disabled", false)
}

function renderPerson(anclaSelector, person, id) {
  $(anclaSelector).append(`
      <tr id="person-${id}">
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button type="button" id="button-${id}" data-id=${id} class="btn btn-success btn-save">Guardar</button></td>
      </tr>
        `)
  addEventToSaveButton(`#button-${id}`)
}

function addEventToSeeMoreButton() {
  console.log('se llamo')
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
  var button = $(selector)
  button.click(function (event) {
    var target = $(event.target)
    var id = target.attr('data-id')
    var trToRemove = $(`#person-${id}`)
    savePerson(id, characters[id])
    trToRemove.remove()
  })
}




export default peopleController