
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
          <h3 className="question"> Do I need to have an account to use TasteTravel? </h3>
            <p>
              Yes, you need to have an account to use TasteTravel. You can visit the FAQ page and the On Board page to read about the site, however, you need to have an account to be able to experience the full TasteTravel journey.
            </p>
             <br></br>
          <h3 className="question"> How does it work? </h3>
            <p>
              The On Board page gives you all the information you need to learn more about the site. Click here to navigate to the page:
              <Link
                to="/OnBoard">
                <button className="faqButton">
                      On Board
                </button>
              </Link>
            </p>
            <br></br>
          <h3 className="question"> How do I change my preferences? </h3>
            <p>
              You can change your preferences on the preference side. Click here to navigate to the page:
              <Link
                to="/Preferences">
                <button className="faqButton">
                    Preferences
                </button>
              </Link>
            </p><br></br>
            <h3 className="question"> How do I change my profile settings? </h3>
              <p>
                You can change your preferences on the preference side. Click here to navigate to the page:

            <Link
              to="/profile">
              <button className="faqButton">
                  Profile
              </button>
            </Link>
            </p><br></br>
          <h3 className="question"> Can I create my own recipes? </h3>
          <h3 className="question"> Can I share recipe to others? </h3>
          <h3 className="question"> How do I save recipes? </h3>
        </div>
      </div>
    </div>
  )
}

export default Faq
