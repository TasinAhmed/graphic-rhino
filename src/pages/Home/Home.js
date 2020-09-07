import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/home.png";
import { Helmet } from "react-helmet";
import Quote from "../../components/Quote/Quote";
import Img1 from "../../images/explore-1.png";
import Img2 from "../../images/explore-2.png";
import Img3 from "../../images/explore-3.png";
import Img4 from "../../images/explore-4.png";
import Ser1 from "../../images/service-1.png";
import Ser2 from "../../images/service-2.png";
import Ser3 from "../../images/service-3.png";
import Ser4 from "../../images/service-4.png";
import Service from "../../components/Service/Service";
import Explore from "../../components/Explore/Explore";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";
const quote = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";
const name = "John Doe";
const exploreText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim ante sed velit aliquet finibus.";
const desc = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Graphic Rhino | Home</title>
      </Helmet>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="over ons"
        link="/about"
      />
      <main>
        <section className="brand">
          <div className="container">
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
          <div className="container">
            <Explore
              num={1}
              title="case title"
              text={exploreText}
              image={Img1}
            ></Explore>
            <Explore
              num={2}
              title="case title"
              text={exploreText}
              image={Img2}
            ></Explore>
            <Explore
              num={3}
              title="blog title"
              text={exploreText}
              image={Img3}
            ></Explore>
            <Explore
              num={4}
              title="blog title"
              text={exploreText}
              image={Img4}
            ></Explore>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <Service
              image={Ser1}
              name="Grafisch ontwerp"
              desc={desc}
              hover={true}
            />
            <Service image={Ser2} name="Drukwerk" desc={desc} hover={true} />
            <Service image={Ser3} name="Animaties" desc={desc} hover={true} />
            <Service
              image={Ser4}
              name="Online marketing"
              desc={desc}
              hover={true}
            />
          </div>
        </section>
        <section className="quotes">
          <div className="container">
            <h2 className="heading-2">Wat onze klanten zeggen</h2>
            <Quote name={name} text={quote} />
            <Quote name={name} text={quote} />
            <Quote name={name} text={quote} />
            <Quote name={name} text={quote} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
