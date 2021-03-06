import React, { useState, useEffect } from 'react'
import 'firebase/auth'
import randomizeAPI from 'helpers/randomizeAPI'

const API_KEY = randomizeAPI;


export default function Recipe({ recipe }) {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image)
        // setReview(data.summary)
        console.log(recipe.id)
      })
      .then((data) => {
        document.getElementById("summary").innerHTML = data
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
  }, [recipe.id])

  return <article>
    <h1><b>{recipe.title}</b></h1>
    <img src={imageUrl} alt="recipe" />
    <ul>
      <li><b>Time: </b>{recipe.readyInMinutes} min</li>
      <li><b>Serves: </b> {recipe.servings}</li>
      <li><b>Health Score: </b> {recipe.healthScore}</li>
    </ul>
    <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
  </article>
}
