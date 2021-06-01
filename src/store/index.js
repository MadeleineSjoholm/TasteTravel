// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}


import { createStore, applyMiddleware, compose } from 'redux'
import RecipeApp from 'reducers'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const initStore = () => {
  const middlewares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const store = createStore(
    RecipeApp,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}

export default initStore


