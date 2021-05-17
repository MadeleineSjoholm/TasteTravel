import { FETCH_PREFERENCES_SUCCESS } from 'types'
import { combineReducers } from 'redux'


const initCuisines = () => {

  const all = (state = [], action) => {
    switch(action.type) {
      case FETCH_PREFERENCES_SUCCESS:
        return action.preferences
      default:
        return state
    }
  }

  return combineReducers({all})
}

const preferences = initCuisines()

export default preferences