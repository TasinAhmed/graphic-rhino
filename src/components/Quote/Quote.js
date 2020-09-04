import React from "react";
import Quotation from "../../images/quotation.png";

function Quote({ name, text }) {
  return (
    <div className="quote">
      <img src={Quotation} className="quote__icon" alt="Quotation" />
      <p className="quote__quote">{text}</p>
      <p className="quote__name">{name}</p>
    </div>
  );
}

export default Quote;
