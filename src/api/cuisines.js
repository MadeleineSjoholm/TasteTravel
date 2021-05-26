
import db from 'db'

export const createPreference = newPreference => {
  return db
    .collection('preference')
    .add(newPreference)
    .then(docRef => docRef.id)
}

export const createCuisine = newCuisine => {
  return db
    .collection('cuisine')
    .add(newCuisine)
    .then(docRef => docRef.id)
}

export const createFavorite = newFavoriteRecipe => {
  return db
    .collection('FavRec')
    .add(newFavoriteRecipe)
    .then(docRef => docRef.id)
}