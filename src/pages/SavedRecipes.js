import withAuthorization from 'components/hoc/withAuthorization'
import React, {useState } from 'react'
import db from 'db'
import firebase from 'firebase/app'
import 'firebase/auth'



const SavedDisplay = ( ) => {
  const [imageUrl, setImageUrl] = useState("")
  const [title, settitle] = useState("")
  const [readyInMinutes, setreadyInMinutes] = useState("")
  const [servings, setservings] = useState("")
  const [sourceUrl, setsourceUrl] = useState("")


  const user = firebase.auth().currentUser
  console.log(user.uid)
  db.collection("FavRec").doc(user.uid).onSnapshot((doc) => {
    const savedRec = doc.data()

    console.log(savedRec.FavoriteRecipe)
    const recipeStr = savedRec.FavoriteRecipe
    const recipes = recipeStr.split(',')
    console.log(recipes)
    console.log(recipes.length)


    console.log(recipes)
    const recipeId = ((recipes))
    console.log((recipeId))
    const recipeInt = parseInt(recipes)
    console.log(recipeInt)
      fetch(`https://api.spoonacular.com/recipes/${recipeInt}/information?apiKey=9c651708cc604ceaa7d0cad063018dd4&includeNutrition=false`)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image)
        console.log(data)
        settitle(data.title)
        setreadyInMinutes(data.readyInMinutes)
        setservings(data.servings)
        setsourceUrl(data.sourceUrl)
      }).catch(() => {
        console.log("error")

      }, [recipes])
        console.log(recipes)

})
  return (

    <div className="container">
    <div className="content-wrapper">
       <h1 className="title">Saved Recipes</h1>
       <figure className="map_background2">
         <img src="map.png" alt="Company Logo" />
       </figure>
       <article>
      <h1>{title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preperation time: {readyInMinutes} minutes</li>
        <li>Number of servings: {servings}</li>
      </ul>
      <button className="faqButton"><a href={sourceUrl}><div className="hreflink">Go to Recipe</div></a></button>
  </article>
  </div>
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  < br />
  </div>
  )
  }


export default withAuthorization(SavedDisplay)
