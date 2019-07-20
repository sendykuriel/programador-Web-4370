//VER PORQUE NO FUNCIONA!?
$('document').ready(function () {

  // Variables y declaraciones
  let botonEliminar = $('#eliminar1')

  console.log(botonEliminar)
  // $('.btn.btn-danger').fadeOut(() => {
  console.log('ffffffffffffffffff')



  //botonEliminar.fadeOut(50)
  //botonEliminar.parent().parent().fadeOut(200)

  botonEliminar.on('click', eliminarFila)

  function eliminarFila(e) {
    let campo = $(e.target)
    console.log($(e.target))
    campo.parent().parent().parent().fadeOut(1)
  }


})