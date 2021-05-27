// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const withAuthorization = Component => {
  class WithAuthorization extends React.Component {

    render() {
      const { auth } = this.props
      return auth.isAuth ? <Component {...this.props} /> : <Redirect to="/login" />
    }
  }

  return connect(({auth}) => ({auth}))(WithAuthorization)
}


export default withAuthorization


