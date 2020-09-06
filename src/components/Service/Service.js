import React from "react";

function Service({ name, desc, image, hover = false }) {
  return (
    <div className={`service ${hover ? "service--hover" : null}`}>
      <img src={image} alt="Service" className="service__icon" />
      <div className="service__name">{name}</div>
      <div className="service__desc">{desc}</div>
    </div>
  );
}

export default Service;
