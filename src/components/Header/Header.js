import React from "react";
import Button from "../Button/Button";

function Header({ image, title, text, btnText }) {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${image})`,
      }}
    >
      <div className="container">
        <div className="header__content">
          <div className="header__text">
            <h1 className="header__title heading-1">{title}</h1>
            <p className="header__description">{text}</p>
          </div>
          {btnText === undefined ? null : <Button btnText={btnText} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
