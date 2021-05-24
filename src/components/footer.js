import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
  <div className="footer">


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

    <div className = "socialmedia">


    <a className="youtube" href="https://www.youtube.com/">
      <FontAwesomeIcon icon={faYoutube} size="2x" /></a>

      <a className="facebook" href="https://www.facebook.com/">
        <FontAwesomeIcon icon={faFacebook} size="2x" /></a>

        <a className="twitter" href="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitter} size="2x" /></a>

          <a className="instagram" href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
</div>



    </div>
);

export default Footer;
