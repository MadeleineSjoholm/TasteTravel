/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
// import MealList from 'components/recipe/MealList'
//import ServiceItem from 'components/service/ServiceItem'
// import RecipeItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'
// import { fetchRecipes } from 'actions'
const weeklyCuisine = "Italian";
const API_KEY = "f94d33a64b6f4135ab3e6a2b9fc8ce3c"


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feature1: null,
      feature2: null,
      feature3: null,
      feature4: null,
      imageurl1: "",
      imageurl2: "",
      imageurl3: "",
      imageurl4: "",
      loading: true
    }
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.componentDidMount();
    alert("You are submitting " + this.state.tags);
  }

  myChangeHandler = (event) => {
    this.setState({ tags: event.target.value });
    console.log(this.state.tags)
  }


  // async componentDidMount() {
  //   // this.props.fetchRecipes()
  //   const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${weeklyCuisine}&addRecipeInformation=true&apiKey=${API_KEY}`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   this.setState({ 
  //     feature1: data.results[0], 
  //     feature2: data.results[1], 
  //     feature3: data.results[2], 
  //     feature4: data.results[3], 
  //     imageurl1: data.results[0].image,
  //     imageurl2: data.results[1].image,
  //     imageurl3: data.results[2].image,
  //     imageurl4: data.results[3].image,
  //     loading: false,  })
  //   console.log(data)
  // }

  // renderRecipes =(recipes) =>
  // recipes.map(recipes => <RecipeItem key={recipe.id} recipe={recipe} />)
 

  //FETCHAR POPULAT DESTINATIONS
  //  componentDidMount() {
  //    this.props.fetchServices()
  //  }

  // renderServices = (services) =>
  //   services.map(service => <ServiceItem key={service.id} service={service} />)


  render() {
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-small">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Featured Destination</h2>
              <h3 className="subtitle is-5 is-2">This weeks highlighted cuisine: <b>{weeklyCuisine}</b></h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
                <div className="field">
                {this.state.loading || !this.state.feature1 ? <div>loading...</div> :
                <ul>
                <img src={this.state.imageurl1} alt="recipe" />
               <h1>{this.state.feature1.title}</h1>
               <li>Serves {this.state.feature1.servings} People</li>
               <li>Ready In {this.state.feature1.readyInMinutes} Minutes</li>
               <li>Amounts of likes: {this.state.feature1.aggregateLikes}</li>
               <li>Dish Type: {this.state.feature1.dishTypes}</li>
               
               <a href={this.state.feature2.sourceUrl}>Go to Recipe</a>
               </ul>}
                   {this.state.loading || !this.state.feature2 ? <div>loading...</div> :
                 <ul>
                    <img src={this.state.imageurl2} alt="recipe" />
                   <h1>{this.state.feature2.title}</h1>
                   <li>Serves {this.state.feature2.servings} People</li>
                   <li>Ready In {this.state.feature2.readyInMinutes} Minutes</li>
                   <li>Amounts of likes: {this.state.feature2.aggregateLikes}</li>
                   <li>Dish Type: {this.state.feature2.dishTypes}</li>
                   
                   <a href={this.state.feature2.sourceUrl}>Go to Recipe</a>
                   </ul>}

                   {this.state.loading || !this.state.feature3 ? <div>loading...</div> :
                <ul>
                <img src={this.state.imageurl3} alt="recipe" />
               <h1>{this.state.feature3.title}</h1>
               <li>Serves {this.state.feature3.servings} People</li>
               <li>Ready In {this.state.feature3.readyInMinutes} Minutes</li>
               <li>Amounts of likes: {this.state.feature3.aggregateLikes}</li>
               <li>Dish Type: {this.state.feature3.dishTypes}</li>
               
               <a href={this.state.feature3.sourceUrl}>Go to Recipe</a>
               </ul>}

               {this.state.loading || !this.state.feature4 ? <div>loading...</div> :
               
                <ul>
                <h1>{this.state.feature4.title}</h1>
               <img src={this.state.imageurl4} alt="recipe" />
               <li>Serves {this.state.feature4.servings} People</li>
               <li>Ready In {this.state.feature4.readyInMinutes} Minutes</li>
               <li>Amounts of likes: {this.state.feature4.aggregateLikes}</li>
               <li>Dish Type: {this.state.feature4.dishTypes}</li>
               
               <a href={this.state.feature4.sourceUrl}>Go to Recipe</a>
               </ul>}
                </div>
                {/* {this.state.mealData && <MealList MealData={this.state.mealData} />} */}
                 
              </div>
            </div>
          </div>



        </section>


      </div>
    )
  }
}

//const mapStateToProps = state => ({services: state.services.all})

//export default connect(mapStateToProps, {fetchServices})(Home)

export default Home
           