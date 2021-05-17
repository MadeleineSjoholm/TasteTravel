
import {
  FETCH_CUISINES_SUCCESS,
  FETCH_CUISINE_SUCCESS,
  REQUEST_CUISINE } from 'types'

import * as api from 'api'

export const fetchCuisines = () => dispatch =>
   api
    .fetchCuisines()
    .then(cuisines => dispatch(
      {
        type: FETCH_CUISINES_SUCCESS,
        cuisines
      }
    )
  )

export const fetchCuisineById = cuisineId => (dispatch, getState) => {
  const lastCuisine = getState().selectedCuisine.item
  if (lastCuisine.id && lastCuisine.id === cuisineId) { return Promise.resolve() }

  dispatch({type: REQUEST_CUISINE})
  return api
    .fetchCuisineById(cuisineId)
    .then(async cuisine => {
      // cuisine.user = await api.getUserProfile(cuisine.user)
      // const user = await cuisine.user.get()
      // cuisine.user = user.data()
      // cuisine.user.id = user.id

      dispatch({type: FETCH_CUISINE_SUCCESS, cuisine}
    )}
  )
}
