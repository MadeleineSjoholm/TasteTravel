
import React, {useState, useEffect} from 'react'

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("")
  
useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=2b27d20d15814f56a742d05fa5d873a8&includeNutrition=false` 
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image)
    })
    .catch(() => {
      console.log("error")
    })
}, [meal.id])

  return <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
      <li><b>Most popular: {meal.veryPopular}</b></li>
          <li>Sustainable: {meal.sustainable}</li>
          <li>Health Score: {meal.healthScore}</li>
        {/* <li>Preperation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
        <li>Cuisines: {meal.cuisines}</li>
        <li>Cuisines: {meal.summary}</li> */}
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  
}