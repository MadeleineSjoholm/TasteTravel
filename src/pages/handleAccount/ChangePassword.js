/* eslint no-useless-escape: 0 */
import React from 'react'
import UpdateForm from 'components/auth/UpdateForm'
import withAuthorization from 'components/hoc/withAuthorization'
//import firebase from 'firebase/app'
import 'firebase/auth'
import Spinner from 'components/Spinner'

const Profile = (props) => {
  const { isFetching } = props

  if (isFetching) { return <Spinner /> }


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
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(Profile)
