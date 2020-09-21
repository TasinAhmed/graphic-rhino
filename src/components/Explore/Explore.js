import React from "react";

function Explore({ num, title, text, image, anim, dur, del }) {
  return (
    <div
      data-aos={anim}
      data-aos-duration={dur}
      data-aos-delay={del}
      className={`explore__box explore__box--${num}`}
    >
      <div className="explore__circle"></div>
      <div
        className="explore__img"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url(${image})`,
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
