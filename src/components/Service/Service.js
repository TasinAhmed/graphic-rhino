import React from "react";

function Service({ name, desc, image }) {
  return (
    <div className="service">
      <img src={image} alt="Service image" className="service__img" />
      <div className="service__name">{name}</div>
      <div className="service__desc">{desc}</div>
    </div>
  );
}

export default Service;
