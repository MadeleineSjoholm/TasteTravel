/* eslint no-useless-escape: 0 */
import React from 'react'
import UpdateForm from 'components/auth/UpdateForm'
import { Link } from 'react-router-dom'
import withAuthorization from 'components/hoc/withAuthorization'
import firebase from 'firebase/app'
import 'firebase/auth'

const Profile = (props) => {
const user = firebase.auth().currentUser
const userid  = props.auth

const updateUserProfile = () => {
  const password = '999999'
  //NU ÄR DET DETTA LÖSEN OVAN SOM SÄTTS NÄR MAN UPPDATERAR OAVSETT VAD MAN SKRIVER IN
 user.updatePassword(password).then(function() {
   alert('Password updated!')
 }).catch(function(errors) {
 alert('An error!')
 })
}

return (
  <div className="auth-page">
    <figure className="map_background">
      <img src="map.png" alt="Company Logo" />
    </figure>
    <div className="container has-text-centered">
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Your Profile</h3>

          <div class="grid-container">
              <div class="picture">
                <figure className=" is-medium">
                <img src = {userid.user.avatar} width='100' height='100'/>
                </figure>
                <button className="faqButton">Change Profile Picture</button>
              </div>

              <div class="infoBox">
                <div align='left'>
                <h2 className="subtitle has-text-grey">{`Name: ${userid.user.fullName}`}</h2>
                <h2 className="subtitle has-text-grey">{`Email: ${userid.user.email}`}</h2>
                <h2 className="subtitle has-text-grey">{`User ID: ${userid.user.uid}`}</h2>
                <h2 className="subtitle has-text-grey"> Preferences: hejhejhej </h2>

                <h1 className="title has-text-grey">Settings</h1>
                <p className="subtitle has-text-grey">Want to update your password?</p>
                <Link
                  to="/ChangePassword">
                  <button className="faqButton">
                      Update Password
                  </button>
                </Link>
                <p className="subtitle has-text-grey">Want to update your Preferences?</p>
                <Link
                  to="/Preferences">
                  <button className="faqButton">
                      Update Preferences
                  </button>
                </Link>
              </div>
          </div>
        </div>

      </div>
    </div>
</div>
)
}

export default withAuthorization(Profile)
