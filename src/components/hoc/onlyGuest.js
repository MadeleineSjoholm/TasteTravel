// This structure is written by Filip Jerga who was 
// the instructor of the online course that the whole 
// team took at the beginning. 
// Link: {React JS & Firebase Complete Course (incl. Chat Application) | Udemy}

import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const onlyGuest = Component => {
  class OnlyGuest extends React.Component {
    render() {
      const { auth, dispatch, ...rest } = this.props
      return auth.isAuth ? <Redirect to="/" /> : <Component {...rest} />
    }
  }

  return connect(({auth}) => ({auth}))(OnlyGuest)
}


export default onlyGuest


