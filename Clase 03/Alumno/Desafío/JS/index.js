//solo suma y división

var operacion = prompt('ingrese operación: suma ó div')

while (operacion !== 'suma' || operacion !== 'div') {
  if (operacion === 'suma') {
    let s1 = parseInt(prompt('ingrese sumando 1'))
    let s2 = parseInt(prompt('ingrese sumando 2'))
    console.log(s1 + s2)
    break
  } else if (operacion === 'div') {
    let d1 = parseInt(prompt('ingrese dividendo'))
    let d2 = parseInt(prompt('ingrese divisor'))
    while (d2 === 0) {
      d2 = parseInt(prompt('ingrese un divisor distinto de cero'))
    }
    console.log(d1 / d2)
    break
  }

  operacion = prompt('ingrese operación: suma ó div')

}