import React from 'react';
import {FaRegDotCircle} from 'react-icons/fa';

const UserLocation = (props) => {

  return (
    <div className='user-location'>
      <FaRegDotCircle size='40'/>
      <div>{`Lat: ${Math.ceil(props.lat * 100) / 100}, Lng: ${Math.ceil(props.lng * 100) / 100}`}</div>
    </div>
  );
}

export default UserLocation;