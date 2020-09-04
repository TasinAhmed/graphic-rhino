import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/cases.png";
import { Helmet } from "react-helmet";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";

function Cases() {
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Cases</title>
      </Helmet>
      <Header image={Background} title={title} text={text} btnText="over ons" />
    </>
  );
}

export default Cases;
