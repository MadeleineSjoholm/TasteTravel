
import { FETCH_CUISINES_SUCCESS } from 'types'
import { combineReducers } from 'redux'


const initCuisines = () => {

  const all = (state = [], action) => {
    switch (action.type) {
      case FETCH_CUISINES_SUCCESS:
        return action.cuisines
      default:
        return state
    }
  }

  return combineReducers({ all })
}

const cuisines = initCuisines()

export default cuisines