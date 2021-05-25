/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import QuickRecipeList from 'components/recipe/QuickRecipeList'
import SearchForm from 'components/recipe/SearchForm'
//import ServiceItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'
const API_K = "f94d33a64b6f4135ab3e6a2b9fc8ce3c"

class QuickSearh extends Component {
 

    state = {
      recipes: []
    }
 
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${recipeName}&addRecipeInformation=true&apiKey=${API_K}`);
    
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }




  render() {



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <SearchForm getRecipe={this.getRecipe} />
        <QuickRecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}

//const mapStateToProps = state => ({services: state.services.all})

//export default connect(mapStateToProps, {fetchServices})(Home)

export default QuickSearh