import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/cases.png";
import { Helmet } from "react-helmet";

const title = "Wat wij bieden";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Cases() {
  return (
    <div className="cases">
      <Helmet>
        <title>Graphic Rhino | Cases</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="contacteer ons"
        link="/contact"
      />
    </div>
  );
}

export default Cases;
