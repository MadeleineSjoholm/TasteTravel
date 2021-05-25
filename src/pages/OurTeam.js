import React from 'react'

const OurTeam = ({auth}) => {

  return (
    <div className= "container">
      <br />
      <h1 className="title">Our Team</h1>
        <p> This is the team behind TasteTravel! </p> <br />
        <div className = "member">
          <div className="member1">
            <img src="./TEAM/Madeleine.png" alt='pic'/>
              <div className="person"> Madeleine </div><br />
              <p>
              This is Madeleine, she is a frontend developer and
              UI designer. She is also TasteTravels own security expert. 
              <br />
              </p>
          </div>

          <div className= "member2" >
            <img src="./TEAM/moana.png" alt='pic'/>
            <div className="person"> Moana </div><br />
            <p>
            Moana is the acting project manager and database designer. 
            She is also a part of the back-end team while also working on front-end bits as they come up. A factotum you might say. 
            <br />
            </p>
          </div>

          <div className= "member3" >
            <img src="./TEAM/alva.png" alt='pic'/>
            <div className="person"> Alva </div><br />
            <p>
              The third team member is Alva who 
              is a backend developer and also 
              responsible for the usability 
              and privacy of the application. 
              <br />
              </p>
          </div>

          <div className= "member4" >
            <img src="./TEAM/felicia.png" alt='pic'/>
            <div className="person"> Felicia </div><br />
              <p>
              Next up is Felicia who is a frontend developer 
              and TasteTravels Communication Manager. 
              Felicia is also responsible for generating the test data. 
              <br />
              </p>
            </div>
          </div>
          <br />
        </div> 
  )
}

export default (OurTeam)
