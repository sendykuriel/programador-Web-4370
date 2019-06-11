var dia = prompt('Ingrese dia')
var diaMinuscula = dia.toLowerCase()

switch (diaMinuscula) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('dia habil')
    break;
  case 'sabado':
  case 'domingo':
    console.log('finde :)')
    break;
  default:
    console.log('No es un dia valido')
    break;
}