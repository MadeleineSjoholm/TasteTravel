// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import {
  SET_AUTH_USER,
  RESET_AUTH_STATE
} from 'types'

import * as api from 'api'

export const register = registerFormData => api.register({ ...registerFormData })
export const login = loginData => api.login({ ...loginData })
export const onAuthStateChanged = onAuthCallback => api.onAuthStateChanged(onAuthCallback)

export const logout = uid => dispatch =>
  api
    .logout()
    .then(_ => {
    })
    .then(_ => dispatch({ user: null, type: SET_AUTH_USER }))

export const storeAuthUser = authUser => dispatch => {
  dispatch({ type: RESET_AUTH_STATE })
  if (authUser) {
    return api
      .getUserProfile(authUser.uid)
      .then(userWithProfile => dispatch({ user: userWithProfile, type: SET_AUTH_USER }))

  } else {
    return dispatch({ user: null, type: SET_AUTH_USER })
  }
}