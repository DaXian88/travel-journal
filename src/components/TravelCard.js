import React from "react";
import "../styles/TravelCard.css";

function TravelCard(props) {
  const { title, startDate, endDate, location, imageUrl, description } =
    props.data;

  return (
    <div className="travel-card-container">
      <img className="location-image" src={imageUrl} alt="location" />
      <div className="journey-details">
        <h4 className="location">{location}</h4>
        <h2>{title}</h2>
        <h5>
          {startDate} - {endDate}
        </h5>
        <p className="journey-description">{description}</p>
      </div>
    </div>
  );
}

export default TravelCard;
