import db from 'db'

export const fetchFavoriteRecipeById = FavoriteRecipeId => 
  db.collection('FavRec')
    .doc(FavoriteRecipeId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))


export const fetchUserFavoriteRecipe = userId => 
  db.collection('FavRec')
    .where("user", "==", userId)
    .get()
    .then(snapshot => {
      const FavoriteRecipe = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return FavoriteRecipe
    })

export const fetchFavoriteRecipe = () => 
  db.collection('FavRec')
    .get()
    .then(snapshot => {
      const FavoriteRecipe = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return FavoriteRecipe
    })