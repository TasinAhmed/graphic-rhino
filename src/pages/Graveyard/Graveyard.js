import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/graveyard.png";
import { Helmet } from "react-helmet";

const title = "Design graveyard";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Graveyard() {
  const myRef = useRef(null);
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Graveyard</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="bekijk ons werk"
        link="/cases"
        scrollTo={myRef}
      />
      <main className="graveyard" ref={myRef}></main>
    </>
  );
}

export default Graveyard;
