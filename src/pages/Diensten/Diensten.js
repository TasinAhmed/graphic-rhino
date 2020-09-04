import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/diensten.png";
import { Helmet } from "react-helmet";

const title = "Wat wij bieden";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Diensten() {
  return (
    <div className="diensten">
      <Helmet>
        <title>Graphic Rhino | Diensten</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="contacteer ons"
      />
    </div>
  );
}

export default Diensten;
