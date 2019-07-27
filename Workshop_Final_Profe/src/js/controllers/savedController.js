import { savePerson, deletePerson, isSaved, dataStore } from '../utils/dataStore'
import { translateToSpanish } from '../utils/dictionary'
import { getId } from '../utils/utils'
var nextPage
var index
var characters

function savedController() {
  $('#root').load('./partials/people.html', function () {
    var allKeys = Object.keys(dataStore)
    for (var i = 0; i < allKeys.length; i++) {
      var person = dataStore[allKeys[i]];
      var id = getId(person)
      renderPerson('#tableBody', person, id)
    }
  })
}

function renderPerson(anclaSelector, person, id) {
  $(anclaSelector).append(`
      <tr id="person-saved-${id}">
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button type="button" id="button-del-${id}" data-id=${id} class="btn btn-danger btn-save">Eliminar</button></td>
      </tr>
        `)
  addEventToDeleteButton(`#button-del-${id}`)
}

function addEventToDeleteButton(selector) {
  var button = $(selector)
  button.click(function (event) {
    var target = $(event.target)
    var id = target.attr('data-id')
    var trToRemove = $(`#person-saved-${id}`)
    deletePerson(id)
    trToRemove.remove()
  })
}




export default savedController