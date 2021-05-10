
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react'
import RegisterForm from 'components/auth/RegisterForm'
import { register } from 'actions'
import { useToasts } from 'react-toast-notifications'
import onlyGuest from 'components/hoc/onlyGuest'
import { Redirect } from 'react-router-dom'


// import { withRouter } from 'react-router-dom'

const Register = (props) => {
const { addToast } = useToasts()
const [redirect, setRedirect] = useState(false)
if (redirect) { return <Redirect to="/onboard" /> }

const registerUser = (userData) => {
  register(userData)
    .then(
      _ => () => {},
      errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 }))
}

return (
  <div className="auth-page">
    <figure className="map_background">
      <img src="map.png" alt="Company Logo" />
    </figure>
    <div className="container has-text-centered">
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Register</h3>
        <p className="subtitle has-text-grey"> Let's start your TasteTravel journey!</p>
        <div className="box">
          <figure className="avatar">
            <img src="logga.png" alt="Company Logo" />
          </figure>
          <RegisterForm onRegister={registerUser} />
        </div>

        <p className="has-text-grey">


          <a href="/Faq">Need Help?</a>
        </p>

      </div>
    </div>
  </div>
)
}

// export default withRouter(Register)
export default onlyGuest(Register)
