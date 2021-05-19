

import React, {useState, useEffect} from 'react'

export default function Recipe({recipe}) {
  const [imageUrl, setImageUrl] = useState("")

useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=9c651708cc604ceaa7d0cad063018dd4&includeNutrition=false` 
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

      <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
    </article>
}
