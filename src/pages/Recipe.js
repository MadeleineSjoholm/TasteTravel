


import React from 'react'
import MapChart from "../MAP/MapChart";
import withAuthorization from 'components/hoc/withAuthorization'

const Recipe = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div class="recipe">
          <div class="img"><img src="https://res.cloudinary.com/coopsverige/image/upload/w_1200,h_1200/v1573725187/385546.jpg" width="400" height="200" alt="alternatetext"/></div>
          <div class="ingredients">
          <ul>
            <li> 400g - Spaghetti </li>
            <li> 4 - Eggs</li>
            <li> 200g - Pancetta </li>
            <li> 30g - Pecorino </li>
            <li> 30g - Parmesan </li>
            <li> Salt and pepper </li>
          </ul>
          </div>
          <div class="name">
            <h2 className="title">Carbonara</h2>
            <p>Spaghetti carbonara är en snabblagad italiensk klassiker. En äkta carbonara görs utan grädde och blir krämig tack vare en skvätt pastavatten i såsen. Snåla inte med svartpepparn och använd nymalen från kvarn. </p>
          </div>
          <div class="instructions">
            <ol>
              <li>Koka spaghettin ca 3 minuter kortare än anvisningen på förpackningen säger.</li>
              <li>Skär pancettan i små bitar. Stek pancettan i en wokpanna eller en stekpanna med höga kanter utan fett tills den blivit krispig. Lyft upp och lägg åt sidan. Låt fettet vara kvar i pannan.</li>
              <li>Vispa ihop äggulorna med den fint rivna osten och rikligt med nymalen svartpeppar i en skål.</li>
              <li>Sätt på värmen igen på pannan med stekfettet, häll i ca 3 dl av pastavattnet och låt koka.</li>
              <li>Häll av spagettin och lägg i pannan med pancettan. Precis som när man kokar risotto i en buljong ska pastan få koka i stekfettet. Låt koka ca 2-3 minuter och rör om hela tiden, det gör att stärkelsen från pastan utsöndras och det blir en krämig sås.</li>
              <li>När vattnet börjar koka in och det är någon matsked kvar, ta pannan från värmen. Tillsätt äggsmeten, rör runt tills det blir krämigt, tillsätt lite vatten om det blir torrt. Smaka av med salt och peppar.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuthorization(Recipe)
