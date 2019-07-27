import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'
import savedController from './controllers/savedController'
import { searchController } from './controllers/searchController'

homeController()
searchController()

function router() {

  crossroads.addRoute('#/home', homeController)

  crossroads.addRoute('#/contact', contactController)

  crossroads.addRoute('#/local-storage', savedController)

  crossroads.addRoute('#/people', peopleController)
  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })


  crossroads.parse(window.location.hash)
}

export default router