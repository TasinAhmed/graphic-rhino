import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/about.png";
import { Helmet } from "react-helmet";

const title = "Nice to meet you";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function About() {
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | About</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="contacteer ons"
      />
    </>
  );
}

export default About;
