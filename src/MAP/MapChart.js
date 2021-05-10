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
                      window.location.href = "/cuisine/nordic";
                    } else if (AfricaCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/africa";
                    } else if (MiddleEastCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/middleeast";
                    } else if (EastEuropeCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/easteurope";
                    } else if (LatinAmericaCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/latinamerica"
                    } else if (AmericaCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/america";
                    } else if (NAME === "United Kingdom" || NAME === "Ireland" ) {
                      window.location.href = "/cuisine/britain";
                    } else if (NAME === "India" ) {
                      window.location.href = "/cuisine/india";
                    } else if (NAME === "China" ) {
                      window.location.href = "/cuisine/china";
                    } else if (NAME === "Italy" ) {
                      window.location.href = "/cuisine/italy";
                    } else if (MediterraneanCuisine.includes(NAME)) {
                      window.location.href = "/cuisine/mediterranean";
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
