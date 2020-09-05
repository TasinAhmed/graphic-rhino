import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.png";
import { Helmet } from "react-helmet";
import Map from "../../images/map.png";
import Button from "../../components/Button/Button";

const title = "Contacteer ons";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Contact() {
  return (
    <div className="contact">
      <Helmet>
        <title>Graphic Rhino | Contact</title>
      </Helmet>
      <Header image={Background} title={title} text={text} />
      <main>
        <section className="information">
          <div className="container">
            <img className="information__map" src={Map} alt="Map" />
            <form className="form">
              <input
                className="form__input"
                required
                type="text"
                placeholder="Naam + achternaam*"
              />
              <input
                className="form__input"
                required
                type="email"
                placeholder="Email*"
              />
              <input
                className="form__input"
                required
                type="tel"
                placeholder="Telefoonnummer"
              />
              <input
                className="form__input"
                required
                type="email"
                placeholder="Bericht"
              />
              <Button btnText="verzenden" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
