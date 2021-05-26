
import * as api from 'api'

export * from './auth'
export * from './recipe'
export * from './preferences'

export const createRef = (collection, docId) => api.createRef(collection, docId)
export const createFavRec = (collection, docId) => api.createFavRec(collection, docId)
