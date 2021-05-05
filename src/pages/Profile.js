
import React from 'react'
import { Link } from 'react-router-dom'
import UpdateForm from 'components/auth/UpdateForm'
import { register } from 'actions'
import { useToasts } from 'react-toast-notifications'
import onlyGuest from 'components/hoc/onlyGuest'
import withAuthorization from 'components/hoc/withAuthorization'
import db from 'db'

const Profile = (props) => {
const { addToast } = useToasts()

var user = db.auth().currentUser;
var fullName, email, avatar, uid;

if (user != null) {
  fullName = user.fullName;
  email = user.email;
  avatar = user.photoURL;
  uid = user.uid; 


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
        <h3 className="title has-text-grey">Your Profile</h3>
        <p className="subtitle has-text-grey"> Here you can update your information.</p>
        <div className="box">
          <UpdateForm onRegister={registerUser} />
        </div>
      </div>
    </div>
  </div>
)
}

// export default withRouter(Register)
export default Profile
