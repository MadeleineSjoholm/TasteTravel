

import React, {useState, useEffect} from 'react'

import db from 'db'
import firebase from 'firebase/app'
import 'firebase/auth'


export default function Recipe({recipe}, { auth }) {
  
  const [imageUrl, setImageUrl] = useState("")
  const user = firebase.auth().currentUser


const setFavorite = () => {
  console.log( recipe.id )
  const userid  = auth
  console.log(user)
  db.collection("FavRec").doc(user.uid).set({
    FavoriteRecipe: recipe.id
})
alert('Reset Succesfull, now you can set your new ones!')

  }

useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=df8f6279130e4a768bd08e6a5d7ad77b&includeNutrition=false` 
    )
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.image)
      console.log(recipe.id)
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
      <button 
        name='recipeId'
        onClick = {setFavorite}
        img src="heart.png" 
        width="50" 
        height="50" 
        alt='heart' 
        >
        <br></br>SAVE RECIPE
      </button>   

      <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
      </article>
}
