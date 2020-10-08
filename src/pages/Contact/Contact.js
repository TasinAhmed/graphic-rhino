import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.jpg";
import { Helmet } from "react-helmet";
import MapWithAMarker from "../../components/Map/MapWithAMarker";
import ReCAPTCHA from "react-google-recaptcha";

const title = "Contacteer ons";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Contact() {
  const myRef = useRef(null);
  const [captcha, setCaptcha] = useState(false);
  function onChange(value) {
    if (value) {
      setCaptcha(true);
    }
  }
  const recaptchaRef = React.createRef();
  const onSubmit = () => {};

  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Contact</title>
      </Helmet>
      <Header image={Background} title={title} text={text} scrollTo={myRef} />
      <main className="contact" ref={myRef}>
        <section className="information">
          <div className="container">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi31TdptmmtjtJbOeX3sts18QAJq7F2ZQ&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="map" />}
              mapElement={<div style={{ height: `100%` }} />}
              lat={50.7558602}
              lng={3.4277491}
            />
            <form
              className="form"
              data-aos="zoom-in"
              data-aos-duration="500"
              onSubmit={onSubmit}
            >
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="text"
                  placeholder="Naam + achternaam*"
                  pattern="[a-zA-Z][a-zA-Z\s]*"
                  id="name"
                />
                <label className="form__label" htmlFor="name">
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
                <label className="form__label" htmlFor="email">
                  Email*
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="tel"
                  placeholder="Telefoonnummer"
                  pattern="\d+"
                  id="phone"
                />
                <label className="form__label" htmlFor="phone">
                  Telefoonnummer
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  required
                  type="text"
                  placeholder="Bericht"
                  id="report"
                />
                <label className="form__label" htmlFor="report">
                  Bericht
                </label>
              </div>
              <div className="form__captcha">
                <ReCAPTCHA
                  sitekey="6Lf37dQZAAAAAJw6EqXa4noEURKmaz-yZgmI6XkE"
                  onChange={onChange}
                  ref={recaptchaRef}
                />
              </div>
              <button type="submit" className="btn">
                verzenden
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
