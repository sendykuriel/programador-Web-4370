function contactController() {

  $('#root').load('./partials/contact.html', function () {
    console.log('Se cargo la form')

    let firstName = $('#firstName')
    let submitButton = $('#submitButton')
    let email = $('#email')
    let comments = $('#comments')

    firstName.one('blur', validateNonEmpty)
    firstName.on()
    email.one('blur', validateEmail)
    comments.one('blur', validateNonEmpty)


  })
}



function validateNonEmpty(e) {
  let campo = $(e.target)
  let valor = campo.val()
  campo.next().remove()
  let padre = campo.parent()

  if (valor) {
    campo
      .addClass('is-valid')
      .removeClass('is-invalid')


  } else {
    campo
      .addClass('is-invalid')
      .removeClass('is-valid')
    padre.append('<p class="text-danger" id="msgCom">Campo Requerido</p>')

  }
  //asociar la validacion el evento input --> para ingreso manual de datos!
  if (event.type === 'blur') {
    campo.on('input', validateNonEmpty)
  }
  allValidationsOk()

}



function validateEmail(event) {
  var input = $(event.target)
  input.next().remove()
  var errorText = ''
  var valueToValidate = input.val();
  var containsAt = valueToValidate.indexOf('@') > -1
  var containsDot = valueToValidate.indexOf('.') > -1
  if (valueToValidate.length < 1) {
    errorText = errorText + 'Campo requerido '
  }
  if (!containsAt) {
    errorText = errorText + 'Debe contener arroba (@) '
  }
  if (!containsDot) {
    errorText = errorText + 'Debe contener punto (.) '
  }
  if (errorText === '') {
    //codigo si es valido
    input.addClass('is-valid').removeClass('is-invalid')
  } else {
    input.addClass('is-invalid').removeClass('is-valid')
    input.parent().append(`<div class='invalid-feedback'>${errorText}</div>`)
    //codigo si no es valido
  }

  //asociar la validacion el evento input - Genero Listener 
  if (event.type === 'blur') {
    input.on('input', validateEmail)
  }
  allValidationsOk()
}

function allValidationsOk() {
  let submitButton = $('#submitButton')
  var allOk = $('.is-valid').length === 3
  if (allOk) {
    submitButton.attr('disabled', false)
  } else {
    submitButton.attr('disabled', true)
  }
}

export default contactController