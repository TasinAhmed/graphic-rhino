import React from "react";

function TextBlock({ title, content }) {
  return (
    <div className="text-block">
      <h2 className="text-block__title heading-2">{title}</h2>
      <div className="text-block__content">{content}</div>
    </div>
  );
}

export default TextBlock;
