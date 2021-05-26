
import { combineReducers } from 'redux'
import services from './services'
import selectedService from './selectedService'
import auth from './auth'
import selectedCuisine from './selectedCuisine'
import cuisines from './services'
import selectedPreference from './selectedPreference'
import preference from './preferences'

const serviceApp = combineReducers({
  services,
  selectedService,
  selectedCuisine,
  selectedPreference,
  preference,
  auth, 
  cuisines
})

export default serviceApp