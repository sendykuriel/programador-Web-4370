//El formulario deberá validar el campo email verificando que contenga arroba, punto y contenido. Si existe algún error deberá mostrar el campo en rojo

$(document).ready(function () {

  let input = $('#email')
  input.blur(validateField)

})


//Validar el campo email verificando que contenga arroba, punto y contenido

function validateField(e) {
  let campo = $(e.target)
  let valor = e.target.value
  let arroba = valor.indexOf('@') > -1
  let punto = valor.indexOf('.') > -1


  if (valor && arroba && punto) {
    campo.addClass('is-valid').removeClass('is-invalid') //como devuelve un objeto con lo aplicado, puedo encdenar!!

  } else {
    campo
      .addClass('is-invalid')
      .removeClass('is-valid') //tambien puedo ponerlo así :)

  }



}