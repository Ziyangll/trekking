import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
//import * as trailData from "./data/sample_trails.json";
import mapStyles from "./mapStyles";

let center = { lat: 33.518589, lng: -86.810356 };
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(setCenter);
}
function setCenter(position) {
  center = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
}

let realTrailData;
// get trail data
fetch(
  `https://www.hikingproject.com/data/get-trails?lat=${center.lat}&lon=${center.lng}&maxDistance=20&key=${process.env.REACT_APP_TRAIL_API_KEY}`
)
  .then((res) => res.json())
  .then((data) => (realTrailData = data))
  .then(() => console.log(realTrailData));

function Map() {
  const [selectedTrail, setSelectedTrail] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedTrail(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={center}
      defaultOptions={{ styles: mapStyles }}
    >
      {realTrailData.trails.map((trail) => (
        <Marker
          key={trail.id}
          position={{
            lat: trail.latitude,
            lng: trail.longitude,
          }}
          onClick={() => {
            setSelectedTrail(trail);
          }}
          icon={{
            url: trail.imgMedium,
            scaledSize: new window.google.maps.Size(35, 35),
          }}
        />
      ))}

      {selectedTrail && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedTrail(null);
          }}
          position={{
            lat: selectedTrail.latitude,
            lng: selectedTrail.longitude,
          }}
        >
          <div>
            <h3>{selectedTrail.name}</h3>
            <p>{selectedTrail.summary}</p>
            <p>difficulty: {selectedTrail.difficulty}</p>
            <p>length: {selectedTrail.length} miles</p>
            <p>{selectedTrail.stars}/5</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComplete() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
