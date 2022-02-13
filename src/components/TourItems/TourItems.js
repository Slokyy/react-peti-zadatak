import React from 'react';
import "./TourItems.css";

const TourItems = ({data, handleDelete}) => {
  //const handleDeleteItem = handleDelete;
  return (
    <div className="tours flex">
      {data && data?.map(tour => {
        const {id, name, info, image, price} = tour;


        return (
          <div className="tour" key={id}>
            <img src={image} className="tour-img" alt={name} />
            <div>
              {name}
              {price}
              <div>
                {info}
              </div>
            </div>
            <button onClick={() => handleDelete(id)}>Remove</button>
          </div>
        );
      })}
    </div>
  )
}

export default TourItems