import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.jpg";
import emailjs from "emailjs-com";
import { MapContainer as LeaftletMap, TileLayer, Marker } from "react-leaflet";
import { Helmet } from "react-helmet";

const title = "Contacteer ons";
const text =
  "Hebben we je helemaal kunnen overtuigen om met ons in zee te gaan? Heb je vragen die dringend een antwoord zoeken? Contacteer ons gerust, we houden van een goed verhaal en leuke babbel.";

function Contact() {
  const [values, setValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_tjs91ag",
        e.target,
        "user_kYLV4H0AdUZxldunO9EGc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const myRef = useRef(null);

  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Contacteer ons voor een vrijblijvende offerte & een kop thee - Graphic Rhino"
        />

        <meta
          name="description"
          content="Contacteer ons voor al je vragen. Wij zorgen voor de antwoorden bij een lekkere kop thee. We zijn vlot bereikbaar en je kan voor de deur parkeren."
        />

        <meta
          property="article:author"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/graphicrhino/"
        />

        <meta property="og:url" content="https://graphicrhino.be/contact" />

        <meta property="og:site_name" content="Graphic Rhino" />

        <meta property="og:locale" content="nl_BE" />

        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Contacteer ons voor een vrijblijvende offerte & een kop thee - Graphic Rhino"
        />

        <meta
          property="og:description"
          content="Contacteer ons voor al je vragen. Wij zorgen voor de antwoorden bij een lekkere kop thee. We zijn vlot bereikbaar en je kan voor de deur parkeren."
        />
      </Helmet>
      <Header image={Background} title={title} text={text} scrollTo={myRef} />
      <main className="contact" ref={myRef}>
        <section className="information">
          <LeaftletMap center={{ lat: 50.756289, lng: 3.42887 }} zoom={17}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{ lat: 50.756289, lng: 3.42887 }} />
          </LeaftletMap>
          <div className="contact__content">
            <form className="form" onSubmit={sendEmail} noValidate>
              <div className="form__group form__group--fname">
                <label className="form__label" htmlFor="first-name">
                  First Name*
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  id="first-name"
                  name="fName"
                  value={values.fName}
                  onChange={handleChange}
                />
                <div className="form__border">
                  <div className="form__fill"></div>
                </div>
              </div>
              <div className="form__group form__group--lname">
                <label className="form__label" htmlFor="last-name">
                  Last Name*
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  id="last-name"
                  name="lName"
                  value={values.lName}
                  onChange={handleChange}
                />
                <div className="form__border">
                  <div className="form__fill"></div>
                </div>
              </div>
              <div className="form__group form__group--email">
                <label className="form__label" htmlFor="email">
                  Email*
                </label>
                <input
                  className="form__input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className="form__border">
                  <div className="form__fill"></div>
                </div>
              </div>
              <div className="form__group form__group--phone">
                <label className="form__label" htmlFor="phone">
                  Telefoonnummer
                </label>
                <input
                  className="form__input"
                  type="tel"
                  pattern="\d+"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <div className="form__border">
                  <div className="form__fill"></div>
                </div>
              </div>
              <div className="form__group form__group--message">
                <label className="form__label" htmlFor="message">
                  Bericht*
                </label>
                <textarea
                  className="form__input"
                  required
                  type="text"
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
                <div className="form__border">
                  <div className="form__fill"></div>
                </div>
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
