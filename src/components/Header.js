import React from "react";
import "../styles/Header.css";
import icon from "../assets/around.png";
function Header() {
  return (
    <div className="header">
      <img className="icon" src={icon} alt="icon" />
      <h1>my travel journal.</h1>
    </div>
  );
}

export default Header;
