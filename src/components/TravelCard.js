import React from "react";

function TravelCard(props) {
  const { title } = props;

  return (
    <div className="travel-card-container">
      <h2>{title}</h2>
    </div>
  );
}

export default TravelCard;
