import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/home.jpg";
import { Helmet } from "react-helmet";
import Quote from "../../components/Quote/Quote";
import Img1 from "../../images/explore-1.jpg";
import Img2 from "../../images/explore-2.jpg";
import Img3 from "../../images/explore-3.jpg";
import Img4 from "../../images/explore-4.jpg";
import Ser1 from "../../images/service-1.png";
import Ser2 from "../../images/service-2.png";
import Ser3 from "../../images/service-3.png";
import Ser4 from "../../images/service-4.png";
import Service from "../../components/Service/Service";
import Explore from "../../components/Explore/Explore";
import TextBlock from "../../components/TextBlock/TextBlock";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";
const quote = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";
const name = "John Doe";
const exploreText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim ante sed velit aliquet finibus.";
const desc = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";
const content =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

function Home() {
  const myRef = useRef(null);
  const isSM = useMediaQuery({ query: "(max-width: 47.99875em)" });
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Home</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="over ons"
        link="/about"
        scrollTo={myRef}
      />
      <main className="home" ref={myRef}>
        <section className="brand">
          <div data-aos="fade-right" className="container">
            <div className="brand__box">
              <div className="brand__title">Brand message here</div>
              <div className="brand__message">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="explores">
          <div className="container" data-aos={isSM ? false : "fade-right"}>
            <Explore
              num={1}
              title="case title"
              text={exploreText}
              image={Img1}
              anim={isSM ? "zoom-in" : null}
            >
              >
            </Explore>
            <Explore
              num={2}
              title="case title"
              text={exploreText}
              image={Img2}
              anim={isSM ? "zoom-in" : null}
            ></Explore>
            <Explore
              num={3}
              title="blog title"
              text={exploreText}
              image={Img3}
              anim={isSM ? "zoom-in" : null}
            ></Explore>
            <Explore
              num={4}
              title="blog title"
              text={exploreText}
              image={Img4}
              anim={isSM ? "zoom-in" : null}
            ></Explore>
          </div>
        </section>
        <section className="textBlock">
          <div data-aos="fade-right" className="container">
            <TextBlock
              title="Betaalbare designs/waarom Graphic Rhino"
              content={content}
            />
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div data-aos="zoom-in" data-aos-duration={500}>
              <Service
                image={Ser1}
                name="Grafisch ontwerp"
                desc={desc}
                hover={true}
              />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              <Service image={Ser2} name="Drukwerk" desc={desc} hover={true} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={400}
            >
              <Service image={Ser3} name="Animaties" desc={desc} hover={true} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={600}
            >
              <Service
                image={Ser4}
                name="Online marketing"
                desc={desc}
                hover={true}
              />
            </div>
          </div>
        </section>
        <section className="quotes">
          <div className="container">
            <h2 className="heading-2">Wat onze klanten zeggen</h2>
            <div data-aos="zoom-in" data-aos-duration={500}>
              <Quote name={name} text={quote} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={200}
            >
              <Quote name={name} text={quote} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={400}
            >
              <Quote name={name} text={quote} />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-delay={600}
            >
              <Quote name={name} text={quote} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
