import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/contact.jpg";
import { MapContainer as LeaftletMap, TileLayer, Marker } from "react-leaflet";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const title = "Contacteer ons";
const text =
  "Hebben we je helemaal kunnen overtuigen om met ons in zee te gaan? Heb je vragen die dringend een antwoord zoeken? Contacteer ons gerust, we houden van een goed verhaal en leuke babbel.";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const [isSending, setIsSending] = useState(false);

  const myRef = useRef(null);

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = (
        await axios.post(`${process.env.REACT_APP_API_URL}/contact`, data)
      ).data;

      toast.success(response);
      reset();
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setIsSending(false);
    }
  };

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
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form__group form__group--name">
                <label className="form__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form__input"
                  required
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", {
                    required: "Please fill the required field",
                  })}
                />
                {errors.name && (
                  <p className="form__error">{errors.name.message}</p>
                )}
              </div>
              <div className="form__group form__group--email">
                <label className="form__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form__input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  {...register("email", {
                    required: "Please fill the required field",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="form__error">{errors.email.message}</p>
                )}
              </div>
              <div className="form__group form__group--phone">
                <label className="form__label" htmlFor="phone">
                  Telefoonnummer -{" "}
                  <span style={{ color: "gray" }}>Optional</span>
                </label>
                <input
                  className="form__input"
                  type="tel"
                  pattern="\d+"
                  id="phone"
                  name="phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="form__error">{errors.phone.message}</p>
                )}
              </div>
              <div className="form__group form__group--message">
                <label className="form__label" htmlFor="message">
                  Bericht
                </label>
                <textarea
                  className="form__input"
                  required
                  type="text"
                  id="message"
                  name="message"
                  {...register("message", {
                    required: "Please fill the required field",
                  })}
                />
                {errors.message && (
                  <p className="form__error">{errors.message.message}</p>
                )}
              </div>
              <button type="submit" className="btn" disabled={isSending}>
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
