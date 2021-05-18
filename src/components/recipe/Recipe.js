

import React, {useState, useEffect} from 'react'

export default function Recipe({recipe}) {
  const [imageUrl, setImageUrl] = useState("")
  
useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=df8f6279130e4a768bd08e6a5d7ad77b&includeNutrition=false` 
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image)
    })
    .catch(() => {
      console.log("error")
    })
}, [recipe.id])

  return <article>
      <h1>{recipe.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preperation time: {recipe.readyInMinutes} minutes</li>
        <li>Number of servings: {recipe.servings}</li>
      </ul>

      <a href={recipe.sourceUrl}>Go to Recipe</a>
    </article>
  
}