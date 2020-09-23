import React from "react";
import Button from "../Button/Button";

function Case({ title, desc, image, mirror = false, anim, dur, del }) {
  return (
    <div className={`case ${mirror ? "case--mirror" : ""}`} data-aos={anim}>
      <div className="case__content">
        <div className="case__title">{title}</div>
        <div className="case__desc">{desc}</div>
        <Button btnText="bekijk de case" />
      </div>
      <div
        className="case__img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default Case;
