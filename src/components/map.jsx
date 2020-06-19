import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import UserLocation from './userLocation';


const Map = () => {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [zoom, setZoom] = useState(5);

  const [userLat, setUserLat] = useState(0);
  const [userLng, setUserLng] = useState(0);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLat(position.coords.latitude);
        setUserLng(position.coords.longitude);
      });
    }
  }, []);


  const FindMe = () => {
    setLat(userLat);
    setLng(userLng);
    setZoom(11);
  }
  
  return (
    <div className='map-div'>
      <button onClick={FindMe} className='find-me'>Find Me</button>
      <GoogleMapReact
        className='map'
        defaultCenter={{lat: 59.955413, lng: 30.337844}}
        defaultZoom={5}
        zoom={zoom}
        center={{lat, lng}}
        controlSize={20}
      >
        <UserLocation
          lat={userLat}
          lng={userLng}
        />
      </GoogleMapReact>
    </div>
  );
  
}

export default Map;