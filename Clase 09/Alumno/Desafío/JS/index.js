// - La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo sea un email valido (exista, tenga arroba y punto). En caso de que haya un error tiene que agregar una clase para mostrar el input en rojo, en caso contrario una clase para que se muestre en verde.

window.onload = function () {
  fieldEmail = document.getElementById("email")


  fieldEmail.onblur = function (event) {

    let value = event.target.value
    console.log(value)
    if (value && value.indexOf("@") > -1 && value.indexOf(".") > -1) {

      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')

    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }


  }
}