// traemos los elementos de una clase y los cambiamos por el de un input

$(document).ready(function () {
  var input = $('#firstName')
  console.log(input)
  input.blur(replaceAllLi)

})

function replaceAllLi(e) {
  e.target.value
  var allItems = $('list-group.item').html(e.target.value) //traigo array de esa clase y lo reemplazo con .html() que es equivalente a innerHtml
  //no tuvimos que hacer un for!!
}