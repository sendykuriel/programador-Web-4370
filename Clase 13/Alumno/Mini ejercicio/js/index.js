$(document).ready(function () {

  $("#t1").on('click', botonEliminar)
  $("#t2").on('click', botonEliminar)
  $("#t3").on('click', botonEliminar)
  $("#t4").on('click', botonEliminar)
  $("#t5").on('click', botonEliminar)

  //por qué esto no anda:
  $("fas fa-trash-alt").on('click', botonEliminar)

  var todosEliminar = $("fas fa-trash-alt").on('click', botonEliminar)


})


function botonEliminar(e) {

  let padreDelBoton = $(e.target).parent()
  padreDelBoton.remove()
}