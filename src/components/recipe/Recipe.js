

import React, {useState, useEffect} from 'react'

export default function Recipe({recipe}) {
  const [imageUrl, setImageUrl] = useState("")

useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=f94d33a64b6f4135ab3e6a2b9fc8ce3c
    &includeNutrition=false` 
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
