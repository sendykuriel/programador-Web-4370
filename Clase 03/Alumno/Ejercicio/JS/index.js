  var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

  //  str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")



  for (let i = 0; i < daysOfTheWeek.length; i++) {
    daysOfTheWeek[i] = daysOfTheWeek[i].toLowerCase()
    daysOfTheWeek[i] = daysOfTheWeek[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "") //SACA ACENTOS!
    if (daysOfTheWeek[i] === 'sabado' || daysOfTheWeek[i] === 'domingo') {
      console.log(daysOfTheWeek[i])
    }



  }