
import { FETCH_CUISINE_SUCCESS, REQUEST_CUISINE } from 'types'
import { combineReducers } from 'redux'

const initSelectedCuisine = () => {
  const item = (state = {}, action) => {
    switch (action.type) {
      case FETCH_CUISINE_SUCCESS:
        return action.cuisine
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case REQUEST_CUISINE:
        return true
      case FETCH_CUISINE_SUCCESS:
        return false
      default:
        return state
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}

const selectedCuisine = initSelectedCuisine()
export default selectedCuisine

