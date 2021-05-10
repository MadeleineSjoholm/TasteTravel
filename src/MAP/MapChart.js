import React, { memo } from "react";
// import { Link } from 'react-router-dom'
import { 
  NordicCuisine, 
  AfricaCuisine, 
  MiddleEastCuisine, 
  EastEuropeCuisine,
  LatinAmericaCuisine,
  AmericaCuisine,
  MediterraneanCuisine 
} from 'docs/data'
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
 

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onClick={()=> {
                    const { NAME, POP_EST } = geo.properties;
                    console.log(NAME);
                    if (NordicCuisine.includes(NAME)) {
                      window.location.href = "/Nordic";
                    } else if (AfricaCuisine.includes(NAME)) {
                      window.location.href = "/Africa";
                    } else if (MiddleEastCuisine.includes(NAME)) {
                      window.location.href = "/MiddleEast";
                    } else if (EastEuropeCuisine.includes(NAME)) {
                      window.location.href = "/EastEurope";
                    } else if (LatinAmericaCuisine.includes(NAME)) {
                      window.location.href = "/LatinAmerica"
                    } else if (AmericaCuisine.includes(NAME)) {
                      window.location.href = "/America";
                    } else if (NAME === "United Kingdom" || NAME === "Ireland" ) {
                      window.location.href = "/Britain";
                    } else if (NAME === "India" ) {
                      window.location.href = "/India";
                    } else if (NAME === "China" ) {
                      window.location.href = "/China";
                    } else if (NAME === "Italy" ) {
                      window.location.href = "/Italy";
                    } else if (MediterraneanCuisine.includes(NAME)) {
                      window.location.href = "/Mediterranean";
                    }   
                  }}
                  

                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#BDCFB5",
                      outline: "none"
                    },
                    hover: {
                      fill: "#B287A3",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
