class Pepe {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sayNombre() {
    console.log(this.nombre)
  }
}

let a = new Pepe('grillo');
a.sayNombre()