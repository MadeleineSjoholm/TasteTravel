// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import React from 'react'
import { connect } from 'react-redux'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Routes from './Routes'
import Spinner from 'components/Spinner'
import Footer from 'components/footer'
import { logout } from 'actions'

class RecipeApp extends React.Component {

  handleLogout = uid => this.props.dispatch(logout(uid))

  renderApplication = auth =>
    <React.Fragment>

      <Navbar
        loadFresh
        id="navbar-main"
        logout={() => this.handleLogout(auth.user.uid)}
        auth={auth} />
      <Navbar
        auth={auth}
        logout={() => this.handleLogout(auth.user.uid)}
        id="navbar-clone" />
      <Sidebar />
      <Routes />
      <Footer />
    </React.Fragment>

  render() {
    const { auth } = this.props
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />
  }
}

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps)(RecipeApp)
