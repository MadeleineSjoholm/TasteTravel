import React from 'react';

import initStore from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import RecipeApp from './RecipeApp'
import { onAuthStateChanged, storeAuthUser } from 'actions'
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'


const store = initStore()

class App extends React.Component {

  componentDidMount() {
    this.unsubscribeAuth = onAuthStateChanged(authUser => {
      store.dispatch(storeAuthUser(authUser))
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render() {
    return (
      <Provider store={store}>
        <ToastProvider>
          <Router>
            < RecipeApp />
          </Router>
        </ToastProvider>
      </Provider>
    )
  }
}


export default App;
