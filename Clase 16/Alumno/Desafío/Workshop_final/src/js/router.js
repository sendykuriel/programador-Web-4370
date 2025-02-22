import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import contactController from './controllers/contactController'


homeController()  //para el primer load

function router () {

  crossroads.addRoute('#/home', homeController)    

  crossroads.addRoute('#/contact', contactController)

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', function(){
        }

  )})

  // En cada cambio del # va a verificar las rutas  (pegar en la consola window.location.hash y corroborar)
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router