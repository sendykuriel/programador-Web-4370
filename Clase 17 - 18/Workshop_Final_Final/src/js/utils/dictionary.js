var dictionary = {
  male: 'Masculino',
  female: 'Femenino',
  blue: 'azul',
  red: 'rojo',
  yellow: 'amarillo',
  brown: 'marron',
  'blue-gray': 'azul grisado'
}


function translateToSpanish(wordInEnglish) {
  var word = wordInEnglish.toLowerCase()
  var traduccion = dictionary[word]
  if (traduccion) {
    return traduccion
  }
  return word
}

export { translateToSpanish }