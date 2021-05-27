

import React from 'react'
import { connect } from 'react-redux'

import { logout } from 'actions'

class Logout extends React.Component {

  componentDidMount() {
    const { isAuth, user } = this.props.auth
    if (isAuth) { this.props.dispatch(logout(user.uid)) }
  }

  render() {
    const { isAuth } = this.props.auth
    return (
      <div className="container">
        <div className="content-wrapper">
        <figure className="map_background2">
          <img src="map.png" alt="Company Logo" />
        </figure>
          { isAuth && <h1 className="LogOut">You are getting logged out...</h1>}
          { !isAuth && <h1 className="LogOut">You are now logged out.<br/>
            <a href="/Login" className="hreflink">  Login</a> to keep traveling!
           <br/>
           <br/>
           Hope to see you soon! </h1>}
        </div>
      </div>

    )
  }
}


export default connect(({auth}) => ({auth}))(Logout)
