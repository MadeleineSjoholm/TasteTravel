/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
// import ReactDOM from 'react-dom'
//import { connect } from 'react-redux' // HOC
import Hero from 'components/Hero'
const weeklyCuisine = "mexican";
const API_KEY = "827194b19189427195018b97d09cde94"


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

  async componentDidMount() {
    // this.props.fetchRecipes()
    const url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${weeklyCuisine}&addRecipeInformation=true&apiKey=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      feature1: data.results[0],
      feature2: data.results[1],
      feature3: data.results[2],
      feature4: data.results[3],
      imageurl1: data.results[0].image,
      imageurl2: data.results[1].image,
      imageurl3: data.results[2].image,
      imageurl4: data.results[3].image,
      loading: false,
    })
    console.log(data.results[0])
  }

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
              <div className="columns is-multiline is-one-quarter">
                <div className="homeRecipes">
                  {this.state.loading || !this.state.feature1 ? <div>loading...</div> :
                    <ul>
                      <img src={this.state.imageurl1} alt="recipe" />
                      <h1><b>{this.state.feature1.title}</b></h1>
                      <li><b>Serves: </b> {this.state.feature1.servings} People</li>
                      <li><b>Time: </b>{this.state.feature1.readyInMinutes} Minutes</li>
                      <li><b>Likes: </b>{this.state.feature1.aggregateLikes} <img src={process.env.PUBLIC_URL + '/heart.svg'} alt='Saved' width="20" height="20" /></li><br />

                      <a href={this.state.feature2.sourceUrl} className="faqButton">Go to Recipe</a>
                    </ul>}
                  {this.state.loading || !this.state.feature2 ? <div>loading...</div> :
                    <ul>
                      <img src={this.state.imageurl2} alt="recipe" />
                      <h1><b>{this.state.feature2.title}</b></h1>
                      <li><b>Serves: </b> {this.state.feature2.servings} People</li>
                      <li><b>Time: </b> {this.state.feature2.readyInMinutes} Minutes</li>
                      <li><b>Likes: </b>{this.state.feature2.aggregateLikes} <img src={process.env.PUBLIC_URL + '/heart.svg'} alt='Saved' width="20" height="20" /></li><br />
                      <a href={this.state.feature2.sourceUrl} className="faqButton">Go to Recipe</a>
                    </ul>}

                  {this.state.loading || !this.state.feature3 ? <div>loading...</div> :
                    <ul>
                      <img src={this.state.imageurl3} alt="recipe" />
                      <h1><b>{this.state.feature3.title}</b></h1>
                      <li><b>Serves: </b> {this.state.feature3.servings} People</li>
                      <li><b>Time: </b>{this.state.feature3.readyInMinutes} Minutes</li>
                      <li><b>Likes: </b>{this.state.feature3.aggregateLikes} <img src={process.env.PUBLIC_URL + '/heart.svg'} alt='Saved' width="20" height="20" /></li><br />
                      <a href={this.state.feature3.sourceUrl} className="faqButton">Go to Recipe</a>
                    </ul>}

                  {this.state.loading || !this.state.feature4 ? <div>loading...</div> :
                    <ul>
                      <img src={this.state.imageurl4} alt="recipe" />
                      <h1><b>{this.state.feature4.title}</b></h1>
                      <li><b>Serves: </b> {this.state.feature4.servings} People</li>
                      <li><b>Time: </b>{this.state.feature4.readyInMinutes} Minutes</li>
                      <li><b>Likes: </b> {this.state.feature4.aggregateLikes} <img src={process.env.PUBLIC_URL + '/heart.svg'} alt='Saved' width="20" height="20" /></li><br />
                      <a href={this.state.feature4.sourceUrl} className="faqButton">Go to Recipe</a>
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

export default Home
