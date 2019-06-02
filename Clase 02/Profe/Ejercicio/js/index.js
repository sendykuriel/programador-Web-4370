// Pido datos de entrada y los guardo en dia
var dia = prompt('Ingrese dia')

// Paso el dia a mayúsculas para hacer la comparación
var diaMinuscula = dia.toLowerCase()


// Imprimo el mensaje correspondiente
switch (diaMinuscula) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')
    break
  case 'sabado':
  case 'domingo':
    console.log('finde :)')
    break
  default:
    console.log('No es un dia valido')
    break
}