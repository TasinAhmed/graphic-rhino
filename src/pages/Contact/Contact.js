import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.png";
import { Helmet } from "react-helmet";

const title = "Contacteer ons";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Contact</title>
      </Helmet>
      <Header image={Background} title={title} text={text} />
    </>
  );
}

export default Contact;
