let nota = parseInt(prompt('Ingrese el resultado de su examen'))
let mensaje

if (nota >= 7) {
  mensaje = 'El alumno está promocionado'
} else if (nota < 4) {
  mensaje = ('El alumno está reprobado' + '\nDebe esforzarse más')
} else {
  mensaje = 'el alumno está aprobado'
}

console.log(mensaje)