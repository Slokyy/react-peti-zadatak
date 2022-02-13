import React, { useState } from 'react'
import "./TourItem.css";

const TourItem = ({tour, handleDelete}) => {
  const {id, name, info, image, price} = tour;
  const [isMore, setIsMore ] = useState(false);

  return (
    <div className="tour">
            <img src={image} className="tour-img" alt={name} />
            <div className="tour-content">
              <div className="tour-title-price flex">
                <h4 className="tour-title">{name}</h4>
                <span className="tour-price">${price}</span>
              </div>
              
              <div className="tour-info">
                {isMore ? info : info.substring(0, 200)+`...`} 
                <button className="read-more-btn" onClick={() => setIsMore(!isMore)}>{ !isMore ? "Read More" : "Read Less"}</button>
              </div>
              <button className="remove-btn" onClick={() => handleDelete(id)}>Not Interested</button>
            </div>
          </div>
  )
}

export default TourItem