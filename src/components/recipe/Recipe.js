

import React, {useState, useEffect} from 'react'

export default function Recipe({recipe}) {
  const [imageUrl, setImageUrl] = useState("")
  
useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=fd6e9efd3d8b45ff90bee15ea56c6d77&includeNutrition=false` 
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