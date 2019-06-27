//Pedir al usuario que ingrese un título y un texto, reemplazar cada uno de los valores en el html con los que ingresó el usuario.

let titleDoc = document.getElementById('title')
let textDoc = document.getElementById('text')

title = prompt('ingrese un titulo')
text = prompt('ingrese un texto')

titleDoc.innerHTML = title
textDoc.innerHTML = text