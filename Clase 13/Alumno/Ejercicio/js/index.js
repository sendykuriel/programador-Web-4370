// - Empezar en cero.
// - Si el usuario presiona Enter (13) tiene que empezar de nuevo.
// - Sumar uno si el usuario presiona arriba (38).
// - Restar uno si el usuario presiona abajo (40).


$('document').ready(function () {

  $(document).keydown(handleKeyDown)

  function handleKeyDown(event) {
    let contador = $('#counter')
    let valorContador = parseInt(contador.html())

    if (event.which === 13) {
      valorContador = 0
    } else if (event.which === 38) {
      valorContador = valorContador + 1
    } else if (event.which === 40) {
      valorContador = valorContador - 1
    }

    return contador.html(valorContador)
  }


})