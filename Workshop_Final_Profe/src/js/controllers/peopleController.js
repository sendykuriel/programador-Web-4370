var nextPage
var index

function peopleController() {
  $('#root').load('./partials/people.html', function () {
    addEventToSeeMoreButton()
    nextPage = 'https://swapi.co/api/people/'
    index = 1
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
    renderPerson('#tableBody', person, index)
    index++
  }
  if (!nextPage) {
    $('#seeMore').hide()
  }
  $('#seeMore').attr("disabled", false)
}

var dictionary = {
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul',
  red: 'rojo',
  yellow: 'amarillo',
  brown: 'marron',
  'blue-gray': 'azul grisado'
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
  $(anclaSelector).append(`
        <tr>
        <td scope="row">${id}</td>
        <td scope="row">${person.name.toLowerCase()}</td>
        <td scope="row">${translateToSpanish(person.gender)}</td>
        <td scope="row">${person.height}</td>
        <td scope="row">${person.mass}</td>
        <td scope="row">${translateToSpanish(person.eye_color)}</td>
        <td scope="row"><button type="button" class="btn btn-success">Guardar</button></td>
      </tr>
        `)
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




export default peopleController