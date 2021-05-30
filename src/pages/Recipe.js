import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCuisineById } from 'actions'
import RecipeList from 'components/recipe/RecipeList'
import Spinner from 'components/Spinner'

const Recipe = props => {

  const { cuisineId } = useParams()
  const { fetchCuisineById, isFetching } = props
  const { cuisine } = props
  const [recipeData, setRecipeData] = useState(null)
  const [diet, setDiet] = useState('vegetarian')
  const [intolerance, setIntolerance] = useState('gluten')
  const [ingredient, setIngredient] = useState('cilantro')

  useEffect(() => {
    fetchCuisineById(cuisineId)
  }, [cuisineId, fetchCuisineById])
  console.log(diet, cuisine.title)

  function getRecipeData() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine.title}&diet=${diet}&excludeIngredients=${ingredient}&intolerances=${intolerance}&addRecipeInformation=true&apiKey=9c651708cc604ceaa7d0cad063018dd4`
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
    setDiet()
    setIngredient()
    setIntolerance()
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
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />
          <button
            className="countryButton"
            onClick={getRecipeData}>Find Recipes</button>
          {recipeData && <RecipeList recipeData={recipeData} />}
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

export default connect(mapStateToProps, { fetchCuisineById })(Recipe)
