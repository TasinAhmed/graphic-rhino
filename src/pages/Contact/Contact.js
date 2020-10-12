import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.jpg";
import { Helmet } from "react-helmet";
import MapWithAMarker from "../../components/Map/MapWithAMarker";

const title = "Contacteer ons";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

function Contact() {
  const onSubmit = () => {
    console.log("Submitted")
  }
  const [values, setValues] = useState({fName: "", lName: "", email: "", phone: "", message: ""}) 
  const [errors, setErrors] = useState({fName: "", lName: "", email: "", phone: "", message: ""}) 

  const handleChange = (e) => {
    const {name,value} = e.target;
    setValues({...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }
  const myRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Graphic Rhino | Contact</title>
      </Helmet>
      <Header image={Background} title={title} text={text} scrollTo={myRef} />
      <main className="contact" ref={myRef}>
        <section className="information">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi31TdptmmtjtJbOeX3sts18QAJq7F2ZQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className="map" />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={50.7558602}
            lng={3.4277491}
          />
          <div className="contact__content">
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__group form__group--fname">
                <input
                  className="form__input"
                  required
                  type="text"
                  id="first-name"
                  name="fName"
                  value={values.fName}
                  onChange={handleChange}
                />
                <label className="form__label" htmlFor="first-name">
                  First Name*
                </label>
              </div>
              <div className="form__group form__group--lname">
                <input
                  className="form__input"
                  required
                  type="text"
                  id="last-name"
                  name="lName"
                  value={values.lName}
                  onChange={handleChange}
                />
                <label className="form__label" htmlFor="last-name">
                  Last Name*
                </label>
              </div>
              <div className="form__group form__group--email">
                <input
                  className="form__input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label className="form__label" htmlFor="email">
                  Email*
                </label>
              </div>
              <div className="form__group form__group--phone">
                <input
                  className="form__input"
                  type="tel"
                  pattern="\d+"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <label className="form__label" htmlFor="phone">
                  Telefoonnummer
                </label>
              </div>
              <div className="form__group form__group--message">
                <textarea
                  className="form__input"
                  required
                  type="text"
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
                <label className="form__label" htmlFor="message">
                  Bericht*
                </label>
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
