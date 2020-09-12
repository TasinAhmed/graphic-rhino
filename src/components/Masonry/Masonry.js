import React from "react";

function Masonry({ images }) {
  const items = [];
  for (const x of images) {
    items.push(
      <div className="masonry__block" onClick="">
        <img className="masonry__img" alt="Grid Item" src={x.url} />
        <div className="masonry__cover"></div>
        <div className="masonry__content">
          <div className="masonry__text">
            <div className="masonry__title">{x.title}</div>
          </div>
        </div>
      </div>
    );
  }
  console.log(items);
  return <div className="masonry">{items}</div>;
}

export default Masonry;
