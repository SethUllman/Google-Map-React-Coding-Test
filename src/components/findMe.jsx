import React, {useState} from 'react';
import geolocation from 'geolocation';

const FindMe = () => {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const findLocation = () => {
    geolocation.getCurrentPosition(function (err, position) {
      if (err) throw err
      setLat(position.coords.lattitude);
      setLng(position.coords.longitude);
    });
  }

  
  return(
    <div onClick={findLocation} className='find-me'
      lat={lat}
      lng={lng}>
      Find Me
    </div>
  )
  
}

export default FindMe;