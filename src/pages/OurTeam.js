import React from 'react'
import { Link } from 'react-router-dom'


const OurTeam = ({auth}) => {

  return (

<div className= "container">


<h1 className="title">Our Team</h1>
<p> The team behind TasteTravel consist of four members. </p>

<div className = "member">

<div className="member1">
<img src="Madeleine.png"/>
</div>

<div className= "member2" >
<img src="moana.png"/>
</div>

<div className= "member3" >
<img src="alva.png"/>
</div>

<div className= "member4" >
<img src="felicia.png"/>
</div>

</div>



    </div>


  )
}

export default (OurTeam)
