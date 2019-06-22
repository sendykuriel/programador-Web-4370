function diaSemanaNumero(dia) {
  var diaLower = dia.toLowerCase()
  var diaSemanaNum = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    domingo: 7
  }
  var numeroDeDia = diaSemanaNum[diaLower]
  console.log(diaSemanaNum.diaLower)
  //diaSemanaNum.'-domingo'
  console.log(diaSemanaNum.lunes)
  numeroDeDia
  if (numeroDeDia) {
    return numeroDeDia
  }
  return 0
}
function diaNumeroSemana(numero) {
  var dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  return dias[numero - 1]
}
console.log(diaSemanaNumero('domingo'))

function maxNumber(numeros) {
  var max = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < numeros.length; i++) {
    if (max < numeros[i]) {
      max = numeros[i]
    }
  }
  return max
}

console.log(maxNumber([]))