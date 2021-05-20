import React from 'react'
import { Link } from 'react-router-dom'


const OurTeam = ({auth}) => {

  return (

<div className= "container">

<br></br>
<h1 className="title">Our Team</h1>
<p> The team behind TasteTravel consist of four members. </p> <br></br>



<div className = "member">

<div className="member1">
<img src="Madeleine.png"/>
<div className="person"> Madeleine </div><br></br>
<p>

här text om personen och dess roll.....

......


.......


.....


....
<br></br>
</p>
</div>

<div className= "member2" >
<img src="moana.png"/>
<div className="person"> Moana </div><br></br>
<p>

här text om personen och dess roll.....

......


.......


.....


....
<br></br>
</p>


</div>

<div className= "member3" >
<img src="alva.png"/>
<div className="person"> Alva </div><br></br>
<p>

här text om personen och dess roll.....

......


.......


.....


....
<br></br>
</p>

</div>

<div className= "member4" >
<img src="felicia.png"/>
<div className="person"> Felicia </div><br></br>
<p>

här text om personen och dess roll.....

......


.......


.....


....
<br></br>
</p>

</div>

</div>



    </div>


  )
}

export default (OurTeam)
