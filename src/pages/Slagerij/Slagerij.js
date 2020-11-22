import React from "react";
import Image from "../../images/portfolio5.jpg";
import Img1 from "../../images/Slagerij_Cannaert_pasta_flyer.jpg";
import Img2 from "../../images/Slagerij_Cannaert_pasta_menukaart.png";
import Header from "../../components/Header/Header";

function Slagerij() {
  return (
    <>
      <Header image={Image} title="SLAGERIJ CANNAERT, ANZEGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">SLAGERIJ CANNAERT, ANZEGEM</div>
            <p>
              Ook flyers en menukaarten zijn geen probleem bij Graphic Rhino!
              Slagerij Cannaert uit Anzegem had graag flyers uitgedeeld om zo
              hun nieuwe take away pasta’s te promoten. Hierna heb ik ook een
              menukaart laten drukken om zo de klanten een duidelijk overzicht
              te geven van de soorten pasta’s dat ze aanbieden.
            </p>
          </div>
          <img src={Img2} className="case-img grid-full" alt="" />
        </div>
      </main>
    </>
  );
}

export default Slagerij;
