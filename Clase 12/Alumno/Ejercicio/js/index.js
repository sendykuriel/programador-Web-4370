// traemos los elementos de una clase y los cambiamos por el de un input

$(document).ready(function () {

  $('.square').click(handleClick)

})

nextSymbol = 'cross' //uso este truco para alternar, esto es el inicio y luego, alterna dentro de la función

var turno = $('#turno')
turno.html(nextSymbol)



function handleClick(e) {
  var symbol = nextSymbol
  var square = $(e.target) //acá estoy transformando el target en un JQuery asi puedo usar JQ, así podemos usar hasClass!! que es funcion de JQ

  if (!square.hasClass('cross') && !square.hasClass('circle')) {
    if (symbol === 'circle') {
      nextSymbol = 'cross'
    } else {
      nextSymbol = 'circle'
    }
    square.addClass(symbol)
    turno.html(nextSymbol)


  }
}