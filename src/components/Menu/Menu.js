import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>Over ons</li>
          </Link>
          <Link to="/diensten">
            <li>Diensten</li>
          </Link>
          <Link to="/cases">
            <li>Cases</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/graveyard">
            <li>Graveyard</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
