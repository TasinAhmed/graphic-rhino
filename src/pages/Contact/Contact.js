import React from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.png";
import { Helmet } from "react-helmet";
import Button from "../../components/Button/Button";
import MapWithAMarker from "../../components/Map/MapWithAMarker";

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
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB052tu4KXMUhMfABQtXr8sXqprreXJ1kk&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={50.7556}
              lng={3.43021}
            />
            <form className="form">
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="text"
                  placeholder="Naam + achternaam*"
                  id="name"
                />
                <label className="form__label" for="name">
                  Naam + achternaam*
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="email"
                  placeholder="Email*"
                  id="email"
                />
                <label className="form__label" for="email">
                  Email*
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="tel"
                  placeholder="Telefoonnummer"
                  id="phone"
                />
                <label className="form__label" for="phone">
                  Telefoonnummer
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="email"
                  placeholder="Bericht"
                  id="report"
                />
                <label className="form__label" for="report">
                  Bericht
                </label>
              </div>

              <Button btnText="verzenden" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
