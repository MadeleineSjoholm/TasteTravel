/* eslint no-useless-escape: 0 */
import React from 'react'
import UpdateForm from 'components/auth/UpdateForm'
import { Link } from 'react-router-dom'
import withAuthorization from 'components/hoc/withAuthorization'
//import firebase from 'firebase/app'
import 'firebase/auth'

const Profile = (props) => {
/*const user = firebase.auth().currentUser


const updateUserProfile = e => {
 // const password = '999999'
  //NU ÄR DET DETTA LÖSEN OVAN SOM SÄTTS NÄR MAN UPPDATERAR OAVSETT VAD MAN SKRIVER IN
 user.updatePassword(password).then(function() {
   alert('Password updated!')
 }).catch(function(errors) {
 alert('An error!')
 })
}*/

return (
  <div className="auth-page">
    <figure className="map_background">
      <img src="map.png" alt="Company Logo" />
    </figure>
    <div className="container has-text-centered">
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Your Profile</h3>


        <div className="box">
        <p className="subtitle has-text-grey"> Here you can update your information. If it does not work, try to logout then login again.</p>
          <UpdateForm />
        <p className="subtitle has-text-grey"> Have you forgotten your password?</p>
          <Link
            to="/ResetPassword">
            <button className="faqButton">
                Reset Password
            </button>
          </Link>
        </div>
      </div>
    </div>
</div>
)
}

export default withAuthorization(Profile)
