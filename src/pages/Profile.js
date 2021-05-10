/* eslint no-useless-escape: 0 */
import React from 'react'
import UpdateForm from 'components/auth/UpdateForm'
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
        <figure className=" is-medium">
        <img src = {userid.user.avatar} width='100' height='100'/> 
        </figure>
        <div align='left'>
        <h2 className="subtitle has-text-grey">{`Name: ${userid.user.fullName}`}</h2>
        <h2 className="subtitle has-text-grey">{`Email: ${userid.user.email}`}</h2>
        <h2 className="subtitle has-text-grey">{`User ID: ${userid.user.uid}`}</h2>
        <h2 className="subtitle has-text-grey"> Preferences: hejhejhej </h2>
        </div>
        
        <div className="box">
        <p className="subtitle has-text-grey"> Here you can update your information. If it does not work, try to logout then login again.</p>
          <UpdateForm onClick={updateUserProfile()}/>
        </div>
      </div>
    </div>
</div> 
)
}

export default withAuthorization(Profile)
