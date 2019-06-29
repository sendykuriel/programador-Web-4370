// # Crear una función que valide que el campo nombre no sea vacío cuando el usuario pierde el foco
// - La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo no sea vacío. En caso de que haya un error tiene que agregar una clase para mostrar el input en rojo, en caso contrario una clase para que se muestre en verde.

// Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`.

window.onload = function () {

  nombre = document.getElementById("firstName")
  console.log(Date.now())
  nombre.onblur = function (event) {
    let value = event.target.value //así es más genérico
    console.log(value)
    console.log(event)
    if (value) { //uso la propiedad falsy
      event.target.classList.add('is-valid')
      event.target.classList.remove('is-invalid')

    } else {
      event.target.classList.add('is-invalid')
      event.target.classList.remove('is-valid')
    }
  }

}