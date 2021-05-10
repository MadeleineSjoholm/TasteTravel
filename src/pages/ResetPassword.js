import React, { useState } from 'react'
import useForm from 'react-hook-form'
import firebase from 'firebase/app'
import 'firebase/auth'


const ResetPassword = ( ) => {

    const user = firebase.auth()

    const resetPassword = () => {
        const email = 'alva.b.99@live.se'
        console.log(email)
        return firebase.auth().sendPasswordResetEmail('alva.b.99@live.se')
    }

return (
    <div className="auth-page">
            <br></br>
          <div className="container has-text-centered">
        <div className="box">
        <h3 className="title has-text-grey"> Reset Password: </h3>
        <p className="subtitle has-text-grey"> Here you can write your email to get a reset password mail.</p>
       <input
          name="email"
          className="input is-large"
          type="email"
          placeholder="Your Email"
          autoComplete="email" />
    <button
        type='submit'
        onClick = {resetPassword}
        className="button is-block rounded secondary-btn raised is-large is-fullwidth">
            Send Email
    </button>
    <br></br>
    </div>
    </div>
    </div>
) 
}

export default ResetPassword