import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const closeMenu = () => {
    document.getElementById("menu-btn").click();
  };

  return (
    <div className="menu">
      <div className="container">
        <input type="checkbox" className="menu__checkbox" id="menu-checkbox" />
        <label for="menu-checkbox" className="menu__btn" id="menu-btn">
          <div className="menu__icon"></div>
        </label>
        <div className="menu__background"></div>
        <div className="menu__nav">
          <ul className="menu__list">
            <Link to="/" onClick={closeMenu}>
              <li>Home</li>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <li>Over ons</li>
            </Link>
            <Link to="/diensten" onClick={closeMenu}>
              <li>Diensten</li>
            </Link>
            <Link to="/cases" onClick={closeMenu}>
              <li>Cases</li>
            </Link>
            <Link to="/blog" onClick={closeMenu}>
              <li>Blog</li>
            </Link>
            <Link to="/graveyard" onClick={closeMenu}>
              <li>Graveyard</li>
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
