console.log('funciona')
let edad = parseInt(prompt('Ingrese su Edad'))
let generobruto = prompt('Ingrese su Genero: Male / Female / Otrx')
let genero = generobruto.toLocaleLowerCase()
let msgEdad
let msgGenero


if (edad >= 18) {
  msgEdad = 'usted es mayor de edad puede ingresar'
} else {
  msgEdad = 'usted es menor de edad no puede ingresar'
}

switch (genero) {
  case 'male':
    msgGenero = 'Sr. '
    break;
  case 'female':
    msgGenero = 'Sra. '
    break;
  default:
    msgGenero = 'Sx. '
    break;
}

console.log(msgGenero + msgEdad)