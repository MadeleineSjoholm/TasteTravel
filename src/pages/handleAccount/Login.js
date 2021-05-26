
/* eslint jsx-a11y/anchor-is-valid: 0 */

//Filip Jerga

import React, { useState } from 'react'
import useForm from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'
import onlyGuest from 'components/hoc/onlyGuest'
import Spinner from 'components/Spinner'
import { login } from 'actions'

const Login = (props) => {
  const [redirect, setRedirect] = useState(false)
  const { register, handleSubmit } = useForm()
  const { addToast } = useToasts()
  const { isFetching } = props

  const onLogin = loginData => {
    login(loginData)
      .then(
        _ => setRedirect(true),
        errorMessage => addToast(errorMessage, { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
      )
  }

  if (redirect) { return <Redirect to="/" /> }
  if (isFetching) { return <Spinner /> }

  return (
    <div className="auth-page">
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <h3 className="title has-text-grey">Login</h3>
          <p className="subtitle has-text-grey">Please login to start TasteTravel! </p>
          <div className="box">
            <figure className="avatar">
              <img src={process.env.PUBLIC_URL + '/nylogg.png'} alt='Company Logo' />
            </figure>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="field">
                <div className="control">
                  <input
                    ref={register}
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    ref={register}
                    name="password"
                    className="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="current-password" />
                </div>
              </div>
              <button
                type="submit"
                className="button is-block rounded secondary-btn raised is-large is-fullwidth">Sign In</button>
            </form>
          </div>
          <p className="has-text-grey">
            <a href="/Register">SIGN UP</a> &nbsp;·&nbsp;
          <a href="/Faq">Need Help?</a>
            <a href='/ResetPassword'>Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default onlyGuest(Login)
