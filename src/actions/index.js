// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import * as api from 'api'

export * from './auth'
export * from './recipe'

export const createFavRec = (collection, docId) => api.createFavRec(collection, docId)
