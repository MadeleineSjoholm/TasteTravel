import React, {useState, useEffect} from 'react'

import 'firebase/auth'


export default function Recipe({recipe}) {


  const API_KEY = "f94d33a64b6f4135ab3e6a2b9fc8ce3c"
  const [imageUrl, setImageUrl] = useState("")
  const [review, setReview] = useState("")

  const shortText = (text, maxLength = 50) => {

    if (!text) { return ' '}
    if (text.length <= maxLength ) { return text }

    return text.substr(0, maxLength) + '...'
  }
  

useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false` 
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image)
      setReview(data.summary)
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
        <div className="card-text">
             {/* { review } */}
           </div>
        {/* <li>Summary: {review}</li> */}
      </ul>
      <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
      </article>
}
