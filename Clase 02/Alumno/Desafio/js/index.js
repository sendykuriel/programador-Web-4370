var genero = prompt('Ingrese su genero: ');
var edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);
var prefijo

switch (genero) {
  case 'male':
    prefijo = 'Sr.';
    break;
  case 'female':
    prefijo = 'Sra.';
    break;
  default:
    prefijo = 'Sx.'
    break;
}
var mensaje

if (edad >== 18) {
  mensaje = 'usted es mayor de edad puede ingresar'
} else {
  mensaje = 'usted es menor de edad y no puede ingresar';
}

console.log(prefijo + ' ' + mensaje);