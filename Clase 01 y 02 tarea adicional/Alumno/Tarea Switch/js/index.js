let caracter = prompt('ingrese caracter')
let mensaje

caracter_ok = caracter.toLowerCase()


switch (caracter_ok) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    mensaje = 'es una vocal'
    break;
  case 'b':
  case 'c':
  case 'd':
  case 'f':
  case 'g':
  case 'h':
  case 'y':
  case 'j':
  case 'k':
  case 'l':
  case 'm':
  case 'n':
  case 'ñ':
  case 'p':
  case 'q':
  case 'r':
  case 's':
  case 't':
  case 'v':
  case 'w':
  case 'x':
  case 'y':
  case 'z':
    mensaje = 'es una consonante'
    break;
  default:
    mensaje = 'es un símbolo:  ' + caracter_ok
    break;
}


console.log(mensaje)