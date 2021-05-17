
// import {
//   FETCH_PREFERENCES_SUCCESS,
//   FETCH_PREFERENCE_SUCCESS,
//   REQUEST_PREFERENCE,
//   FETCH_USER_PREFERENCES_SUCCESS } from 'types'

// import * as api from 'api'

// export const fetchPreferenceById = preferenceId => (dispatch, getState) => {
//   const lastPreference = getState().selectedPreference.item
//   if (lastPreference.id && lastPreference.id === preferenceId) { return Promise.resolve() }

//   dispatch({type: REQUEST_PREFERENCE})
//   return api
//     .fetchPreferenceById(preferenceId)
//     .then(async preference => {
//       preference.user = await api.getUserProfile(preference.user)
//       const user = await preference.user.get()
//       preference.user = user.data()
//       preference.user.id = user.id

//       dispatch({type: FETCH_PREFERENCE_SUCCESS, preference}
//     )}
//   )
// }

