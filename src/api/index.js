// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}
import db from 'db'

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)
export const updateRef = (collection, docId) => db.doc(`${collection}/` + docId)
export const createFavRec = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './auth'
export * from './recipe'
export * from './preferences'
export * from './favoriteRecipes'





