var cars = [{
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]


//Crear una función constructora de objetos Car

//Funcion constructora 

function Car(model, brand, year) {
  this.model = model
  this.brand = brand
  this.year = year
  let id = Date.now()
}

//método que retorna datos del auto
//`getCarName` deberá devolver un String con el modelo, marca y año del auto.

Car.prototype.getCarName = function () {
  return "modelo: " + this.model + " " + "marca: " + this.brand + " " + "año : " + this.year
}

// Crear tres objetos usando los datos de prueba y probar su método `getCarName`
let autos = []

for (let i = 0; i < cars.length; i++) {
  autos.push(new Car(cars[i].model, cars[i].brand, cars[i].year))

}

console.log(autos)

console.log(autos[1].getCarName())