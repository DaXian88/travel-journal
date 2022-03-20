import React from "react";
import "../styles/TravelCard.css";
import locationIcon from "../assets/placeholder.png";

function TravelCard(props) {
  const { title, startDate, endDate, location, imageUrl, description } =
    props.data;

  return (
    <div className="travel-card-container">
      <img className="location-image" src={imageUrl} alt="location" />
      <div className="journey-details">
        <div className="location-container">
          <img
            className="location-icon"
            src={locationIcon}
            alt="location icon"
          />
          <h4 className="location">{location}</h4>
        </div>
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
