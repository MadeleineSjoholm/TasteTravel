import withAuthorization from 'components/hoc/withAuthorization'
import React, {useState, useEffect} from 'react'
import db from 'db'
import firebase from 'firebase/app'
import 'firebase/auth'



const SavedRecipes = () => {
  const [imageUrl, setImageUrl] = useState("")
  const user = firebase.auth().currentUser
  console.log(user.uid)
  const recipeId =  db.collection("FavRec").doc(user.uid).get()
  console.log(recipeId)
  console.log(recipeId.title)

  //const totalResults = recipeData.totalResults

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=df8f6279130e4a768bd08e6a5d7ad77b&includeNutrition=false` 
      )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image)
        console.log(recipeId)
      })
      .catch(() => {
        console.log("error")
      })
  }, [recipeId])

  console.log(recipeId)
  
  return (
    <div className="container">
     <div className="content-wrapper">
        <h1 className="title">Saved Recipes</h1>
        <figure className="map_background2">
          <img src="map.png" alt="Company Logo" />
        </figure>
       <article>
      <h1>{recipeId.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preperation time: {recipeId.readyInMinutes} minutes</li>
        <li>Number of servings: {recipeId.servings}</li>
      </ul>
      <button className="faqButton"><a href={recipeId.sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>

  </article> 
  </div> 
  </div> 
  )
}

export default withAuthorization(SavedRecipes)
