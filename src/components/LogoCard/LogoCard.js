import React from "react";

function LogoCard({ logo, name, desc }) {
  return (
    <div className="logo-card">
      <div class="logo-card__inner">
        <div class="logo-card__front">
          <img src={logo} alt="Company" className="logo-card__logo" />
        </div>
        <div class="logo-card__back">
          <div className="logo-card__name">{name}</div>
          <div className="logo-card__desc">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default LogoCard;
