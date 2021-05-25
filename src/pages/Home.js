/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
// import MealList from 'components/recipe/MealList'
//import ServiceItem from 'components/service/ServiceItem'
import RecipeItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'
import { fetchRecipes } from 'actions'
const weeklyCuisine = "Korean";
const API_KEY = "df8f6279130e4a768bd08e6a5d7ad77b"


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mealData: null,
      tags: '',
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


  async componentDidMount() {
    this.props.fetchRecipes()
    var tags = this.state.tags
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${weeklyCuisine}&addRecipeInformation=true&apiKey=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ mealData: data.results[0], loading: false })
    console.log(data)
    console.log(this.MealList)
    console.log(tags)
  }

  renderRecipes =(recipes) =>
  recipes.map(recipes => <RecipeItem key={recipe.id} recipe={recipe} />)
 

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
              <h2 className="title is-2">Popular Destinations</h2>
              <h3 className="subtitle is-5 is-2">View this weeks highlighted cuisine: <b>Korean</b></h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
                <div className="field">
                </div>
                {/* {this.state.mealData && <MealList MealData={this.state.mealData} />} */}
                {this.state.loading || !this.state.mealData ? <div>loading...</div> :
                 <div>
                   <div>ID: {this.state.mealData.id}</div>
                   <div>Title: {this.state.mealData.title}</div>
                   <div>Amounts of likes: {this.state.mealData.aggregateLikes}</div>
                   <div>Cuisines: {this.state.mealData.cuisines}</div>
                   <div>Diets: {this.state.mealData.diets}</div>
                   <a href={this.state.mealData.sourceUrl}>Go to Recipe</a>
                   </div>}   
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
           