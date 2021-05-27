/* eslint no-useless-escape: 0 */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import withAuthorization from 'components/hoc/withAuthorization'
import db from 'db'
import 'firebase/auth'
import Spinner from 'components/Spinner'

const Profile = (props) => {
  const userid = props.auth
  console.log(userid.user.uid)
  const userID = userid.user.uid
  const { isFetching } = props
  const [diet, setDiet] = useState()
  const [intolerance, setIntolerance] = useState()
  const [ingredient, setIngredient] = useState()

  db.collection("preference").doc(userID).onSnapshot((doc) => {
    const Prefs = doc.data()
    setIntolerance((Prefs.intolerances1 && Prefs.intolerances1) + (Prefs.intolerances2 && ', ' + Prefs.intolerances2) + (Prefs.intolerances3 && ', ' + Prefs.intolerances3))
    setDiet(Prefs.diet)
    setIngredient((Prefs.ingredients1 && Prefs.ingredients1) + (Prefs.ingredients2 && ', ' + Prefs.ingredients2) + (Prefs.ingredients3 && ', ' + Prefs.ingredients3))
    console.log('t1', Prefs)
  })

  const createForm = () => {
    //const userID = user.uid
    db.collection("FavRec").doc(userID).set({
      FavoriteRecipe: ''
    })
    alert('Saved recipes are now set!')
  }

  if (isFetching) { return <Spinner /> }
  return (
    <div >
      <figure className="map_background3">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="container">
        <div className="content-wrapper">
        <h3 className="title">Your Profile</h3>
          <div class="profilepage">

            <div class="picture">
              <figure className=" is-medium">
                <img class='img' src={userid.user.avatar} width='150' height='150' alt='desription' />
              </figure>
              <button className="faqButton">Change Profile Picture</button>
            </div>
            <div class="infoBox">
              <div align='left'>
                <h1 className="title2 "><b>Your Information</b> </h1>
                <p className="subtitle has-text-grey"><b> Name: </b>{`${userid.user.fullName}`}</p>
                <p className="subtitle has-text-grey"><b> Email: </b>{`${userid.user.email}`}</p>
                <p className="subtitle has-text-grey"><b> User ID: </b>{`${userid.user.uid}`}</p>
                <h2 className="subtitle2" > <b>Preferences </b> </h2>
                <h3 className="subtitle has-text-grey">
                  <ul><b> Diet : </b>{diet}</ul><br/>
                  <ul><b> Ingredients : </b>{ingredient}</ul><br/>
                  <ul><b>Intolernces : </b>{intolerance}</ul><br/>
                </h3>

                <h1 className="subtitle2"><b>Settings </b></h1>
                <p className="subtitle has-text-grey"><em>Want to update your password?</em>

                <Link
                  to="/ChangePassword">
                  <button className="PasswordButton">
                    Update Password
                  </button>

                </Link></p>
                <p className="subtitle has-text-grey"><em>Want to update your Preferences?</em>
                <Link
                  to="/Preferences">
                  <button className="UpdateButton">
                    Update Preferences
                  </button>
                </Link></p>

                <p className="subtitle has-text-grey">
                  <em>If you want to save recipes, start by clicking here!
                  <br /> You can also reset your saved recipes by clicking on the button below!</em>
                <button onClick={createForm} className="SavedButton">
                    Set Saved Recipes
                  </button> </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(Profile)
