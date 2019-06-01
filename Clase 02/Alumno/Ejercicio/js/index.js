console.log('funciona')
var diaSem = prompt('Ingrese un dia de la semana')

var diaminuscula = diaSem.toLocaleLowerCase()

switch (diaSem) {
  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Dia Habil')
    break;
  case 'sabado':
  case 'domingo':
    console.log('Fin de Semana')
    break;

  default:
    console.log('Ingrese un día válido')
    break;
}