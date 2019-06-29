//- Usar el form que se encuentra junto a este ejercicio y validar que la edad ingresada por el usuario cuando aprieta el botón 'Validar edad' y mostrar un mensaje en consola cuando el usuario es mayor de edad y otro cuando es menor.

//tomo el valor del input
window.onload = function () {


  let boton = document.getElementById("boton")
  let fieldEdad = document.getElementById("age") //ojo que es un elemento! no es el value

  boton.onclick = function () {
    if (isNaN(fieldEdad.value)) {
      return fieldEdad.value = ''
    }
    let mensaje
    if (parseInt(fieldEdad.value) < 18) {
      mensaje = 'menor de edad'
    } else {
      mensaje = 'mayor de edad'
    }
    return alert(mensaje + ",  la edad es:" + parseInt(fieldEdad.value))
  }
}