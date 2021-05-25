import React, {useState, useEffect} from 'react'
import 'firebase/auth'


export default function Recipe({recipe}) {

  const API_KEY = "827194b19189427195018b97d09cde94"
  const [imageUrl, setImageUrl] = useState("")
  // const [review, setReview] = useState("")

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
        <li>Preperation time: {recipe.readyInMinutes} minutes</li>
        <li>Number of servings: {recipe.servings}</li>
        {/* <div className="card-text">
             { review }
           </div> */}
        {/* <li>Summary: {review}</li> */}
      </ul>
      <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
      </article>
}
