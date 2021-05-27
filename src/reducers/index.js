
import { combineReducers } from 'redux'
import auth from './auth'
import selectedCuisine from './selectedCuisine'

const  RecipeApp = combineReducers({

  selectedCuisine,
  auth
})

export default  RecipeApp