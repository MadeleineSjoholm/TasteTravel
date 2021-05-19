import React from "react";

const Footer = () => (
  <div class="footer">


    <img src="nylogg.png" alt='logo' />

  <div className="team">
  <a href="/OurTeam">OUR TEAM</a>
    </div>

    <div className="contact">
    <a href="/contact">CONTACT</a>
      </div>




        <div className="follow">
          <h1>FOLLOW US</h1>
          <img className="follow" src="facebook.png" alt='logo' width="200" height="300" />
          <img className="follow" src="instagram.png" alt='logo' width="200" height="300" />
          <img className="follow" src="youtube.png" alt='logo' width="200" height="300" />
          <img className="follow" src="twitter.png" alt='logo' width="200" height="300" />
          </div>


          <div className="about">
          <a href="/About">ABOUT US</a>
            </div>



    </div>
);

export default Footer;
