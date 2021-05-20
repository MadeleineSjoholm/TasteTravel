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
      tags1: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.getMealData();
    alert("You are submitting " + this.state.tags1);
  }

  myChangeHandler = (event) => {
    this.setState({ tags1: event.target.value });
    console.log(this.state.tags1)
  }

   getMealData = (event) => {
    event.preventDefault();
    var tags = this.state.tags1
    fetch(
      `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=${tags}&number=4&apiKey=df8f6279130e4a768bd08e6a5d7ad77b`
    )
      .then((response) => response.json())
      .then((data) => {
        this.mealData(data)
      })
      .catch(() => {
        console.log("error");
      })
  }



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
                  <form onSubmit={this.getMealData}>
                    <label className="label" >Quick Search (e.g. "Italian" or "Salmon")
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                      />
                      {/* <input type="text" value={this.state.tags1} onChange={this.handleChange} /> */}
                    </label>
                    <h1>Hello {this.state.tags1}</h1>
                    <input
                      type="submit"
                      value="Find Recipes"
                      className="countryButton"

                    // onClick={getMealData}
                    />
                  </form>
                </div>
                {this.mealData && <MealList MealData={this.mealData} />}
                {/* DISPLAYAR SERVICES
                { this.renderServices(services) } */}
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
