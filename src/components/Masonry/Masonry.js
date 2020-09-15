import React from "react";
import { Link } from "react-router-dom";

function Masonry({ images }) {
  const items = [];
  for (const x of images) {
    items.push(
      <Link to={x.linkTo}>
        <div className="masonry__block">
          <img className="masonry__img" alt="Grid Item" src={x.url} />
          <div className="masonry__cover"></div>
          <div className="masonry__content">
            <div className="masonry__bar masonry__bar--1"></div>
            <div className="masonry__bar masonry__bar--2"></div>
            <div className="masonry__text">
              <div className="masonry__title">{x.title}</div>
              <div className="masonry__desc">{x.desc}</div>
            </div>
            <div className="masonry__bar masonry__bar--3"></div>
            <div className="masonry__bar masonry__bar--4"></div>
          </div>
        </div>
      </Link>
    );
  }
  console.log(items);
  return <div className="masonry">{items}</div>;
}

export default Masonry;
