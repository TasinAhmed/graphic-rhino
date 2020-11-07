import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/portfolio2.jpg";
import Img1 from "../../images/pitta-1.png";
import Img2 from "../../images/pitta-2.jpg";

function Pitta() {
  return (
    <>
      <Header image={Image} title="PITTA MELITA, AVELGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">PITTA MELITA, AVELGEM</div>
            <p>
              Toen ik vroeg om mijn eigen visitekaartjes op de toog van de pitta
              zaak in Avelgem te leggen was de uitbater meteen enthousiast. Hij
              vond dat het wel eens tijd werd voor een nieuw eigen logo met het
              bijhorende drukwerk.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Zo gezegd, zo gedaan. Ik begon met het ontwerp van een nieuw logo
              voor Pitta Melita, daarna volgde een folder met hun nieuwe
              prijzen. Bij nieuwe prijzen moet je uiteraard ook het prijzenbord
              vervangen, dus heb ik ook nieuwe stickers gemaakt voor op hun
              lichtbak. Na de lichtbak sticker volgden er nog stickers voor op
              zijn wagen en de ramen van zijn zaak.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Pitta;
