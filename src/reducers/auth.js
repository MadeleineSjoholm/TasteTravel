// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import {
  SET_AUTH_USER,
  RESET_AUTH_STATE
} from 'types'

const INITIAL_STATE = {
  user: null,
  isAuth: false,
  isAuthResolved: false
}

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {


    case SET_AUTH_USER:
      return { user: action.user, isAuthResolved: true, isAuth: !!action.user }


    case RESET_AUTH_STATE:
      return { ...state, isAuthResolved: false }

    default:

      return state
  }
}

export default auth