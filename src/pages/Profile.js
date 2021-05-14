/* eslint no-useless-escape: 0 */
import React from 'react'
import { Link } from 'react-router-dom'
import withAuthorization from 'components/hoc/withAuthorization'
import 'firebase/auth'
import db from 'db'



const Profile = (props) => {

  const userid  = props.auth

return (
  <div >
    <figure className="map_background">
      <img src="map.png" alt="Company Logo" />
    </figure>
    <div className="container">
      <div className="content-wrapper">
        <div  class="profilepage">
        <h3 className=" yourprofile title has-text-grey">Your Profile</h3>

              <div class="picture">
                <figure className=" is-medium">
                <img class='img' src = {userid.user.avatar} width='150' height='150' alt='desription'/>
                </figure>
                <button className="faqButton">Change Profile Picture</button>
              </div>
              <div class="infoBox">
                <div align='left'>
                <h1 className="title has-text-grey"> Your Information:</h1>
                <h2 className="subtitle has-text-grey">Name: <em>{`${userid.user.fullName}`}</em></h2>
                <h2 className="subtitle has-text-grey">Email: <em>{`${userid.user.email}`}</em></h2>
                <h2 className="subtitle has-text-grey">User ID: <em>{`${userid.user.uid}`}</em></h2>
                <h2 className="subtitle has-text-grey"> Preferences: <em>hejhejhej</em> </h2>
                <br></br>
                <h1 className="title has-text-grey">Settings</h1>
                <p className="subtitle has-text-grey"><em>Want to update your password?</em></p>
                

                <Link
                  to="/ChangePassword">
                  <button className="faqButton">
                      Update Password
                  </button>
                  <br></br>
                </Link>
                <p className="subtitle has-text-grey"><em>Want to update your Preferences?</em></p>
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
