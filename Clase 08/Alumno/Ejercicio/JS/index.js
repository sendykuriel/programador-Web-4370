window.onload = function () {
  // Usar los métodos y propiedades vistos en clase para crear tres nodos `<li>` con distintos nombres adentro, agregarles a cada uno la clase `list-group-item` y agregarlos a la lista provista uno por uno.



  let texts = ['Ed', 'Edd', 'Eddy', 'uri', 'charly']

  //traigo el ul

  let nodoLista = document.getElementById("list")

  console.log('nodolista vale : ' + nodoLista)
  nodoLista.style.color = "red"


  for (let i = 0; i < texts.length; i++) {
    //creo li
    let nodoListaHijo = document.createElement('li')
    nodoListaHijo.className = 'list-group-item'
    nodoListaHijo.innerHTML = texts[i]
    //asigno que sea el hijo
    nodoLista.appendChild(nodoListaHijo)

  }


  //SEGUNDA PARTE
  //hacer una función de esto(paso ul y array y apendea)

  function agregaNodo(ul, array) {

    let nodoLista = document.getElementById(ul)

    for (let i = 0; i < array.length; i++) {
      //creo li
      let nodoListaHijo = document.createElement('li')
      nodoListaHijo.className = 'list-group-item'
      nodoListaHijo.innerHTML = texts[i]
      //asigno que sea el hijo
      nodoLista.appendChild(nodoListaHijo)

    }



  }
}