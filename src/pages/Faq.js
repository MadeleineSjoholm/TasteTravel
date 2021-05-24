
import React from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {

  return (
    <div className="FaqPage">
      <figure className="map_background">
        <img src="map.png" alt="Company Logo" />
      </figure>
      <div className="container">

      <div className="content-wrapper">
        <h1 className="title">FAQ</h1>
        <h3 className="question"> What is TasteTravel? </h3>
          <p>
            TasteTravel allows you to interactively explore recipes from the countries of the world. It caters to your food preferences and matches you with a recipe from a country of your choice. This is done by allowing you to initially specify your food preferences and allergies. TasteTravel then provides you with an interactive world map where you can choose the country of interest. Through the preferences listed and a match-making algorithm, you will then be presented with a recipe from that country.
          </p>
          <br />
        <h3 className="question"> Do I need to have an account to use TasteTravel? </h3>
          <p>
            Yes, you need to have an account to use TasteTravel. To be able to experience the full TasteTravel journey you will need to create an account. Go to the <a href="/register">Register Page</a> to get ready for your travels.
          </p>
          <br />
        <h3 className="question"> How does it work? </h3>
          <p>
            Visit the <a href="/onboard">Onboarding Page</a> to see how TasteTravel works step-by-step.
          </p>
          <br />
        <h3 className="question"> How do I change my preferences? </h3>
          <p>
            You can change your preferences on the <a href="/preferences">Preference Page</a>. Click here to navigate to the page:
              <Link
                to="/Preferences">
                <button className="faqButton">
                    Preferences
                </button>
              </Link>
          </p>
          <br />
        <h3 className="question"> How do I change my profile settings? </h3>
          <p>
            You can change your preferences on your <a href="/profile">Profile Page</a> Click here to navigate to the page:

            <Link
              to="/profile">
              <button className="faqButton">
                  Profile
              </button>
            </Link>
          </p>
          <br />
        <h3 className="question"> Can I create my own recipes? </h3>
          <p>
            Indeed you can! You have the option to add your own favourite recipes on the <a href="/new">Create Recipe Page</a>. We'd love to be able to take part of it no matter if it's a favourite family recipes, something you picked up on your trip to the Andes or anything there in between. Please note that the recipes you add will be visible to other users. So maybe check with your grandma before you spill her secret recipe.
          </p>
          <br />
        <h3 className="question"> Can I share recipe to others? </h3>
        <h3 className="question"> How do I save recipes? </h3>
        <br />
        <h3 className="question"> Why should I specify my food preferences? </h3>
          <p>
            We want to ensure you a personalized experience where you won't have to scroll for hours or sacrifize a good meal because it doesn't suit your diet. When adding the preferences you will be provided with a recipe that suits your needs. Perfect for picky eaters and omnivores alike.
          </p>
          <br />
        <h3 className="question"> What does the different diet options mean? </h3>
          <p>
            The diet alternatives are specified further down on your <a href="/preferences">Preference Page</a>.
          </p>
          <br />
        <h3 className="question"> How do you handle my personal data? </h3>
          <p>
            We take data protection and your integrity very seriously. With the new Data Protection Ordinance (GDPR) your privacy and security are strengthened as to how we as a service will process and protect your personal data. TasteTravel only collects and processes personal data relevant to a specified purposes with support from one of the legal basis. Personal data will never be stored for a longer period than is necessary for the purposes for which they are processed. You are entitled to delete your personal information. This means that you are entitled to request that your personal information be removed if they are no longer required for the purposes for which they have been collected.
          </p>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Faq
