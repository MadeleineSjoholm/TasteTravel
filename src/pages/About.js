import React from 'react'



const About = ({auth}) => {

  return (
    <div className="container">
    <br/>
        <h1 className="title">ABOUT TASTETRAVEL</h1>
        <figure className="map_background2">
          <img src="map.png" alt="Company Logo" />
        </figure>
        <p>

        <h3 className="question"> What is TasteTravel? </h3>
  <p/>
        TasteTravel is a web application allowing users to travel and explore the world through culinary experiences. The system will allow users to interactively
        explore recipes from the countries or regions of the world, enabling the user to travel through their culinary experiences. The app will cater to the user’s
        food preferences and match them with a recipe from a chosen country. This is done by allowing the user to initially specify their food preferences and allergies.
        The system will then provide an interactive world map where the user can choose the country of interest. Through the preferences listed and a match-making algorithm,
        the user will then be presented with a recipe from that country. The system will, through this, offer a personalized and interactive experience, allowing the
        user to travel with their taste buds.

<br />
<br />

          <h3 className="question"> Why do we believe in TasteTravel?  </h3>
<p></p>
        This past year has seen a lot of big changes in the way we live and our mobility due to the ongoing pandemic. Another tangible consequence of the pandemic
        has been our lack of possibility to travel and explore the world. When not being able to explore the world like before, you need to find new ways of
        taking part in culinary experiences, explore new cultures along with seeking new cuisines.
        <br />
        <br />

        In combination, as an effect of our limited mobility and spending more time at home - a surge in interest has been created to explore new recipes and
        food cultures. The survey we conducted  with 55 people showed that 75% of people asked, worked either fully or partly remote, with a majority of people
        now cooking all or almost all meals from home. The survey showed that 76% of those surveyed have a high interest in traveling and when traveling 82% said
        that taking part in the food culture was very important to them.

        <br/>
        <br/>
        <br/>
        <br/>

        </p>
    </div>
  )
}

export default (About)
