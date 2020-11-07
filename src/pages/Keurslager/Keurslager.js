import React from "react";
import Image from "../../images/keurslagerpreview2.jpg";
import Img1 from "../../images/keurslager-1.jpg";
import Img2 from "../../images/Keurslager-2.jpg";
import Header from "../../components/Header/Header";

function Keurslager() {
  return (
    <>
      <Header image={Image} title="KEURSLAGER CRUL, MOEN" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">KEURSLAGER CRUL, MOEN</div>
            <p>
              Keurslager Crul had nood aan nieuwe visitekaartjes, wat wij met
              plezier ontwerpen. Deze kaartjes werden afgewerkt met een matte
              laminaat. Dit voelt een stuk aangenamer aan dan de glanzende
              laminaat die zeer vaak gebruikt wordt.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Flyers kan je gebruiken om je event aan te kondigen zoals bij
              Happy Handmade Jewels, maar ook om je prijzen of nieuwe producten
              bekend te maken. Bij Keurslager Crul is het de bedoeling om via
              deze weg hun horeca prijzen door te geven aan hun klanten. Wij
              krijgen alvast honger van het ontwerp!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Keurslager;
