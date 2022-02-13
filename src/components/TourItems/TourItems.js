import React from 'react';
import "./TourItems.css";
import TourItem from './TourItem/TourItem';

const TourItems = ({data, handleDelete}) => {
  //const handleDeleteItem = handleDelete;

  
  return (
    <div className="tours flex">
      {data && data?.map(tour => {
        return <TourItem tour={tour} handleDelete={handleDelete} key={tour.id} />
      })}
    </div>
  )
}

export default TourItems