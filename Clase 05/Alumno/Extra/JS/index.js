function Fracciones(numerador, denominador) {
  if (denominador === 0) {
    return
  }
  this.numerador = numerador
  this.denominador = denominador

}



Fracciones.prototype.retornaFraccion = function () {
  let fraccion = this.numerador + '/' + this.denominador
  console.log(fraccion)
}



//creo funcion en la instancia:

Fracciones.prototype.sumaFraccion = function (f2) {
  let denomComun = this.denominador * f2.denominador
  let sumFra = this.numerador * f2.denominador + f2.numerador * this.denominador
  return console.log(sumFra + '/' + denomComun)
}

//otra forma es dentr de la clase:

Fracciones.suma = function (fr1, fr2) {

}



Fracciones.prototype.restaFraccion = function (f2) {
  let denomComun = this.denominador * f2.denominador
  let resFra = this.numerador * f2.denominador - f2.numerador * this.denominador
  return console.log(resFra + '/' + denomComun)
}


fr1 = new Fracciones(1, 2)
fr2 = new Fracciones(3, 4)
fr1.retornaFraccion()
fr2.retornaFraccion()
fr1.sumaFraccion(fr2)