

import React, {useState, useEffect} from 'react'

import db from 'db'
import firebase from 'firebase/app'
import 'firebase/auth'


export default function Recipe({recipe}, { auth }) {
  const API_KEY = "9c651708cc604ceaa7d0cad063018dd4"
  const [imageUrl, setImageUrl] = useState("")
  const user = firebase.auth().currentUser  
  console.log( recipe.id )
  console.log(user)
  // db.collection("FavRec").doc(user.uid).set({
  //   FavoriteRecipe: ' '
  // })


const setFavorite = () => {
  db.collection("FavRec").doc(user.uid).onSnapshot((doc) => {
    const favoriteRecipes = doc.data()
    console.log(favoriteRecipes.FavoriteRecipe)

    db.collection("FavRec").doc(user.uid).set({
      FavoriteRecipe: favoriteRecipes.FavoriteRecipe
    })

    if (favoriteRecipes.FavoriteRecipe === '') {
      db.collection("FavRec").doc(user.uid).set({
        FavoriteRecipe: recipe.id
    })
  }

    else if (favoriteRecipes.FavoriteRecipe.includes(recipe.id)) {
      alert('Already added to your favorites!')
      return favoriteRecipes.FavoriteRecipe

    }
    else{
      db.collection("FavRec").doc(user.uid).set({
        FavoriteRecipe: favoriteRecipes.FavoriteRecipe+','+recipe.id
      })
      alert('Added successfully to yout SAVED RECIPES')
      return favoriteRecipes.FavoriteRecipe
    }
 })
}


useEffect(() => {
  fetch(
    `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false` 
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
        <br />SAVE RECIPE
      </button>   

      <button className="faqButton"><a href={recipe.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
      </article>
}
