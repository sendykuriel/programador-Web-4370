//- La función deberá recibir como parámetro un indice y como segundo parámetro un Array 
//y devolver una copia del mismo pero con el elemento que esta en el indice eliminado. 



var numbers = [1, 2, 3, 4, 5]

function recorta(param, arr) {
  if (param <= arr.length) {
    return arr.slice(0, param).concat(arr.slice(param + 1))
  }
  return arr.slice() //CLONADO!!!
}


let a = recorta(2, numbers)
let b = recorta(8, numbers)

console.log(numbers === b)