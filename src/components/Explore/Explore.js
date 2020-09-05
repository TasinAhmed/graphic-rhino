import React from "react";

function Explore({ num, title, img }) {
  return (
    <div className={`explore__box explore__box--${num}`}>
      <div className={`explore__img explore__img--${num}`}></div>
      <div className="explore__content">
        <div className="explore__title">{title}</div>
      </div>
    </div>
  );
}

export default Explore;
