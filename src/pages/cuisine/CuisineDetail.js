import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCuisineById } from 'actions'
//import { Link } from 'react-router-dom'
import RecipeList from 'components/recipe/RecipeList'
import db from 'db'
import 'firebase/auth'


import Spinner from 'components/Spinner'

const CuisineDetail = (props) => {
  const userid  = props.auth
  console.log(userid.user.uid)
  const userID = userid.user.uid

  const { cuisineId } = useParams()
  const { fetchCuisineById, isFetching } = props
  const { cuisine } = props
  const [recipeData, setRecipeData] = useState(null)
  const [diet, setDiet] = useState()
  const [type, setType] = useState()
  const [intolerance, setIntolerance] = useState()
  const [ingredient, setIngredient] = useState()


  db.collection("preference").doc(userID).onSnapshot((doc) => {
    const Prefs = doc.data()
    setIntolerance((Prefs.intolerances1 && Prefs.intolerances1) + (Prefs.intolerances2 && ', ' + Prefs.intolerances2) + (Prefs.intolerances3 && ', ' + Prefs.intolerances3))
    setDiet(Prefs.diet)
    setIngredient((Prefs.ingredients1 && Prefs.ingredients1) + (Prefs.ingredients2 && ', ' + Prefs.ingredients2) + (Prefs.ingredients3 && ', ' + Prefs.ingredients3))
    console.log('t1',Prefs)
  })
  

  useEffect(() => {
    fetchCuisineById(cuisineId)
  }, [cuisineId, fetchCuisineById])
  console.log(diet, cuisine.title)

  function getRecipeData() {
    console.log('t2', intolerance, '!', diet,'!', ingredient, '!', type,'!', cuisine.title)
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine.title}&diet=${diet}&excludeIngredients=${ingredient}&intolerances=${intolerance}&type=${type}&addRecipeInformation=true&apiKey=f94d33a64b6f4135ab3e6a2b9fc8ce3c`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data)
      })
      .catch(() => {
        console.log("error");
      })
  }

  function handleChange(e) {
    setType(e.target.value)
    // setDiet()
    // setIngredient()
    // setIntolerance()
  }

  if (isFetching || cuisineId !== cuisine.id) { return <Spinner /> }

  return (
    <section className="hero is-fullheight is-default is-bold service-detail-page">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src={cuisine.image} alt="First pic of region" />
              </figure>
              <br />
              <figure className="image is-4by3">
                <img src={cuisine.altimage} alt="Second pic of region" />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <div className="service-header-container">
                <div className="media service-user">
                  <div className="media-left">
                    <figure className="image is-48x48">
                    </figure>
                  </div>

                </div>
              </div>
              <h1 className="title is-2">
                {cuisine.title}
              </h1>
              <br />
              <h2 className="subtitle is-6">
                {cuisine.description}
              </h2>
              <br />
            </div>
          </div>
          <div className="field">
              <label className="label">Type of Dish</label>
              <div className="control">
              
                <div className="select">
                  <select name="dish" onChange={handleChange} >
                    <option value="main course">Main Course</option>
                    <option value="side dish">Side Dish</option>
                    <option value="dessert">Dessert</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="salad">Salad</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="soup">Soup</option>
                    <option value="fingerfood">Fingerfood</option>
                    <option value="snack">Snack</option>
                  </select>
                </div>
              </div>
            </div>
          <button
            className="countryButton"
            onClick={getRecipeData}>Find Recipes</button>
              <div>
                <h3 className="subtitle has-text-grey">The recipes are based on your preferences: </h3>
                  <ul>Diet <em>{diet}</em> </ul>
                  <ul> Ingredients <em>{ingredient}</em> </ul>
                  <ul>Intolernces <em>{intolerance}</em> </ul>
              </div>
              <br></br>
              <br></br>
          <div className="recipeSection columns is-centered is-mobile">


            {recipeData && <RecipeList recipeData={recipeData} />}
          </div>
          </div>

        </div>

    </section>
  )
}

const mapStateToProps = ({ selectedCuisine, auth }) => (
  {
    cuisine: selectedCuisine.item,
    isFetching: selectedCuisine.isFetching,
    auth
  }
)

export default connect(mapStateToProps, { fetchCuisineById })(CuisineDetail)
