import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/about.png";
import { Helmet } from "react-helmet";
import TextBlock from "../../components/TextBlock/TextBlock";

const title = "Nice to meet you";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";
const text2 =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

function About() {
  const myRef = useRef(null);
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
        link="/contact"
        scrollTo={myRef}
      />
      <main className="about" id="about" ref={myRef}>
        <div className="container">
          <TextBlock title="reclamebureau" content={text2} />
          <div className="about__img"></div>
          <TextBlock title="name" content={text2} />
          <div className="about__img"></div>
          <TextBlock title="beliefs" content={text2} />
        </div>
      </main>
    </>
  );
}

export default About;
