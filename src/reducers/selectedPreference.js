
import { FETCH_PREFERENCE_SUCCESS, REQUEST_PREFERENCE } from 'types'
import { combineReducers } from 'redux'


const initSelectedPreference = () => {
  const item = (state = {}, action) => {
    switch(action.type) {
      case FETCH_PREFERENCE_SUCCESS:
        return action.preference
      default:
        return state
    }
  }


  const isFetching = (state = false, action) => {
    switch(action.type) {
      case REQUEST_PREFERENCE: 
        return true
      case FETCH_PREFERENCE_SUCCESS:
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

const selectedPreference = initSelectedPreference()
export default selectedPreference




