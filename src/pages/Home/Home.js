import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/home.png";
import { Helmet } from "react-helmet";
import Quote from "../../components/Quote/Quote";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";
const quote = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";
const name = "John Doe";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Graphic Rhino | Home</title>
      </Helmet>
      <Header image={Background} title={title} text={text} btnText="over ons" />
      <main>
        <section className="quotes">
          <div className="container">
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
