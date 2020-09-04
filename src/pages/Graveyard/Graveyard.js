import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/graveyard.png";
import { Helmet } from "react-helmet";

const title = "Design graveyard";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Graveyard() {
  return (
    <div className="graveyard">
      <Helmet>
        <title>Graphic Rhino | Graveyard</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="bekijk ons werk"
      />
    </div>
  );
}

export default Graveyard;
