import React from "react";

function Explore({ num, title, text, image }) {
  return (
    <div className={`explore__box explore__box--${num}`}>
      <div
        className="explore__img"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)),url(${image})`,
        }}
      ></div>
      <div className="explore__content">
        <div className="explore__title">{title}</div>
        <div className="explore__text">{text}</div>
      </div>
    </div>
  );
}

export default Explore;
