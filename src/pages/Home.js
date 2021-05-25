/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
import MealList from 'components/recipe/MealList'
//import ServiceItem from 'components/service/ServiceItem'

//import { fetchServices } from 'actions'

class Home extends React.Component {
  // state = {
  //   selectedOption: null
  // }

  constructor(props) {
    super(props);
    this.state = {
      mealData: null,
      tags: '',
      loading: true
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
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
    var tags = this.state.tags
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${tags}&addRecipeInformation=true&apiKey=df8f6279130e4a768bd08e6a5d7ad77b `
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ mealData: data.results[0], loading: false })
    console.log(data)
    console.log(this.MealList)
    console.log(tags)
  }

   

  //  getMealData = (event, mealData) => {
  //   event.preventDefault();
  //   var tags = this.state.tags
  //   // const { mealData } = this.state.mealData
  //   console.log(tags + " test")
  //   fetch(
  //     // `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${tags}&number=4&apiKey=df8f6279130e4a768bd08e6a5d7ad77b`
  //     `https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&addRecipeInformation=true&apiKey=f94d33a64b6f4135ab3e6a2b9fc8ce3c`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ mealData: data });
  //       console.log(this.mealData)
  //       console.log(data)
  //   });
  // }



  //FETCHAR POPULAT DESTINATIONS
  //  componentDidMount() {
  //    this.props.fetchServices()
  //  }

  // renderServices = (services) =>
  //   services.map(service => <ServiceItem key={service.id} service={service} />)


  render() {
  //   const tags = this.state.tags1;
  //   // const { services } = this.props
  //   console.log(tags)
  // function getMealData() {
  //     fetch(
  //       // `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${tags}&number=4&apiKey=9c651708cc604ceaa7d0cad063018dd4`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.mealData(data)
  //       })
  //       .catch(() => {
  //         console.log("error");
  //       })
  //   }

  



    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-small">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Popular Destinations </h2>
              <h3 className="subtitle is-5 is-2">View the top rated recipes</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
                <div className="field">
                  <form onSubmit={this.mySubmitHandler}>
                    <label className="label" >Quick Search (e.g. "Italian" or "Salmon")
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                      />
                      {/* <input type="text" value={this.state.tags1} onChange={this.handleChange} /> */}
                    </label>
                    <h1>Hello {this.state.tags}</h1>
                    <input
                      type="submit"
                      value="Find Recipes"
                      className="countryButton"

                    // onClick={getMealData}
                    />
               
                {/* DISPLAYAR SERVICES
                { this.renderServices(services) } */}
                  </form>
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
           