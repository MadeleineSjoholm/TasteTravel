
import db from 'db'

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)
export const updateRef = (collection, docId) => db.doc(`${collection}/` + docId)
export const createFavRec = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './auth'
export * from './recipe'
export * from './preferences'
export * from './favoriteRecipes'





