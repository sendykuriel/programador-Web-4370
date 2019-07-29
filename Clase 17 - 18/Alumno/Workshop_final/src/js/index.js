import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  setLocalList
} from './utils/localStorage'
import {
  getLocalList
} from './utils/localStorage'
import router from './router'  //no pongo llaves, traje el default, no el objeto como en setLocalList 



$(document).ready(function(){

router()



})