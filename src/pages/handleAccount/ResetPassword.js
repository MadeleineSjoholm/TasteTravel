import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'


const ResetPassword = ( ) => {
    
    const handleChange = e => {
        const {Name, value} = e.target
        console.log({[Name]: value})
        firebase.auth().sendPasswordResetEmail(value)
      }
    
     const resetProfilePassword = () => {
        alert('An email has been sent')
     }

return (
    <div className="auth-page">
            <br></br>
          <div className="container has-text-centered">
        <div className="box">
        <h3 className="title has-text-grey"> Reset Password: </h3>
        <p className="subtitle has-text-grey"> Here you can write your email to get a reset password mail.</p>
       <input
          onChange = {handleChange}  
          Name="email"
          className="email input is-large"
          type="email"
          placeholder="Your Email"
          autoComplete="email" />
    <button
        type='submit'
        onClick = {resetProfilePassword}
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