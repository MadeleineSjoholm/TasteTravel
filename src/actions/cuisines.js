
import * as api from 'api'


export const createPreference = (updatePreference, userId) => {
  updatePreference.user = api.updateRef('preference', userId)
  return api.createPreference(updatePreference)
}

export const createFavoriteRecipe = (updateFavoriteRecipe, userId) => {
  updateFavoriteRecipe.user = api.updateRef('preference', userId)
  return api.createFavoriteRecipe(updateFavoriteRecipe)
}

export const createCuisine = (newCuisine) => {
  return api.createCuisine(newCuisine)
}