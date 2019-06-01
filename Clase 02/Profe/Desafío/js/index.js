// Pido genero
var genero = prompt('Ingrese su genero: ');

// Le asigno a genero 
var generoMinusculas = genero.toLowerCase()

// Pido edad
var edad = prompt('Ingrese su edad: ');

// Parseo la edad que es un string y la convierto a entero.
edad = parseInt(edad);

// Creo una variable prefijo donde voy a almacenar el prefijo correspondiente
var prefijo

// Según el caso asigno el prefijo correspondiente
switch (generoMinusculas) {
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

// Declaro la variable mensaje para guardar el mensaje que corresponda
var mensaje

// Depende la edad asignará el mensaje
if (edad >== 18) {
  mensaje = 'usted es mayor de edad puede ingresar'
} else {
  mensaje = 'usted es menor de edad y no puede ingresar';
}

// Imprimo el prefijo más un espacio más el mensaje
console.log(prefijo + ' ' + mensaje);