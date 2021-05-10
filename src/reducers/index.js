
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'
import auth from './auth'
import selectedCuisine from './selectedCuisine'
import cuisines from './services'

const serviceApp = combineReducers({
  services,
  selectedService,
  selectedCuisine,
  auth, 
  cuisines
})


export default serviceApp