import React from "react";

const Footer = () => (
  <div class="footer">


  <div className="team">
      <a className="hreflink" href="/OurTeam">OUR TEAM</a>
  </div>

    <div className="contact">
    <a className="hreflink" href="/contact">CONTACT</a>
    </div>

    <div className="about">
    <a className="hreflink" href="/About">ABOUT US</a>
    </div>

    <div className="follow"> <h1>FOLLOW US:</h1></div>

        <div className="logos">
        <div className="facebook"><img src="facebook.png" alt='pic'/></div>
        <div className="instagram"><img src="instagram.png" alt='pic'/></div>
        <div className="youtube"> <img src="youtube.png" alt='pic'/></div>
        <div className="twitter"><img src="twitter.png" alt='pic'/></div>

        </div>

    </div>
);

export default Footer;
