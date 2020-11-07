import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/about.jpg";
import TextBlock from "../../components/TextBlock/TextBlock";
import Img1 from "../../images/about-1.jpg";
import Img2 from "../../images/about-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const title = "Nice to meet you";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";
const text2 =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

function About() {
  const myRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, anchorPlacement: "center-bottom" });
  }, []);
  return (
    <>
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
          <TextBlock anim="fade-right" title="reclamebureau" content={text2} />
          <div className="about__img" data-aos="fade-right">
            <img src={Img1} alt="About" />
          </div>
          <TextBlock anim="fade-right" title="name" content={text2} />
          <div className="about__img" data-aos="fade-right">
            <img src={Img2} alt="About" />
          </div>
          <TextBlock anim="fade-right" title="beliefs" content={text2} />
        </div>
      </main>
    </>
  );
}

export default About;
