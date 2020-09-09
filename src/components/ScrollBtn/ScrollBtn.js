import React from "react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function ScrollBtn({ scrollTo }) {
  const executeScroll = () => scrollToRef(scrollTo);
  return (
    <div onClick={executeScroll} className="scroll-btn">
      <div className="scroll-btn__dot"></div>
    </div>
  );
}

export default ScrollBtn;
