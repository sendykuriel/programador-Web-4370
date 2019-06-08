//funcion promedio

var examResults = [7, 5, 6, 4, 3, 2, 8]

function promedio(arr) {
  let prom = 0 //lo declaro fuera del for para poder salir
  for (let i = 0; i < arr.length; i++) {
    prom = arr[i] + prom;
  }

  return prom / arr.length
}

console.log(promedio(examResults))