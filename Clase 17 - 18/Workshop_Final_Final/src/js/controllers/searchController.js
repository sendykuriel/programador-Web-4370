import { savePerson, isSaved } from '../utils/dataStore'
import { translateToSpanish } from '../utils/dictionary'
import { getId } from '../utils/utils'
import savedController from './savedController'
var filterString = ''

function searchController() {
  var button = $('#buttonSearch')
  var input = $('#inputSearch')
  button.click(function () {
    filterString = input.val()
    savedController()
  })
}

export { searchController, filterString }