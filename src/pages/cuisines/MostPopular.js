import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import 'firebase/auth'
import Spinner from 'components/Spinner'
import { Fragment } from 'react'
import TopRecipeList from 'components/recipe/TopRecipeList'

//CHANGE API HERE
const API_KEY = "827194b19189427195018b97d09cde94"


const MostPopular = (props) => {
  const { isFetching } = props
  const [recipeData, setRecipeData] = useState(null)
  const [cuisine, setCuisine] = useState()
  const amountOfResults = 5

  function getRecipeData() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=${amountOfResults}&addRecipeInformation=true&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data)
        console.log(recipeData)
      })
      .catch(() => {
        console.log("error");
      })
  }

  function handleChange(e) {
    setCuisine(e.target.value)
  }
  if (isFetching) { return <Spinner /> }
  return (
    <Fragment>
      <section className="hero is-fullheight is-default is-bold service-detail-page">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="field">
              <h2 className="title is-2">Most Popular Recipes</h2>
              <h3 className="subtitle is-5 is-2">Sort by Country/Region</h3>
              <div className="divider is-centered"></div>
            </div>
            <div className="content-wrapper">
              <div className="columns is-multiline is-one-quarter">
                <div className="homeRecipes">
                  <div className="select">
                    <select name="cuisine" onChange={handleChange} >
                      <option value="">-</option>
                      <option value="African">Africa</option>
                      <option value="American">America</option>
                      <option value="British">Britain</option>
                      <option value="Chinese">China</option>
                      <option value="Eastern European">Eastern Europe</option>
                      <option value="French">France</option>
                      <option value="German">Germany</option>
                      <option value="Greek">India</option>
                      <option value="Italian">Italy</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Korean">Korean</option>
                      <option value="Latin American">Latin America</option>
                      <option value="Mediterranean">Mediterranean</option>
                      <option value="Mexican">Mexican</option>
                      <option value="Middle Eastern">Middle East</option>
                      <option value="Nordic">Nordic Countries</option>
                      <option value="Spanish">Spain</option>
                      <option value="Thai">Thailand</option>
                      <option value="Vietnamese">Vietnam</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                className="countryButton"
                onClick={getRecipeData}
              >Find Recipes</button>
              <div className="homeRecipes">
                <div className="recipeSectionTop columns is-centered is-mobile">
                  {recipeData && <TopRecipeList recipeData={recipeData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default MostPopular