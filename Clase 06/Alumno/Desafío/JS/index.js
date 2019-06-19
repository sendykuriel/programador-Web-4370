function includesText(text1, text2) {
  //primero chequeo que ambos sean stirng sino devuelve false 

  if (typeof text1 !== 'string' || typeof text2 !== 'string') {
    return false;
  }

  //Paso ambos a minuscula
  text1 = text1.toLowerCase()
  text2 = text2.toLowerCase()

  //Armo el condicional de contenido
  //si devuelve -1 es porque no lo contiene

  if (text2.indexOf(text1) === -1) {
    return false;
  } else {
    return true;
  }



}

includesText('Pa', 'Patricia') // Deberá devolver true
includesText('Patricia', 'Pa') // Deberá devolver false
includesText(2, 'Pa') // Deberá devolver false