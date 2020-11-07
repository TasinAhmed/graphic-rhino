import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/ebopreview.jpg";
import Img1 from "../../images/ebo-1.jpg";
import Img2 from "../../images/ebo-2.jpg";

function Ebo() {
  return (
    <>
      <Header image={Image} title="EBO, INGOOIGEM" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">EBO, INGOOIGEM</div>
            <p>
              EBO staat voor Energie & Bouw Ovaere. Bij dit bedrijf kan je
              terecht voor je epc & energie audits. Bij een nieuw bedrijf heb je
              uiteraard een huisstijl nodig. We hebben ze dan ook voorzien van
              een nieuw logo met bijpassende visitekaartjes.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Maar dat is nog niet alles! Wij verzorgden ook een subtiele
              reclame op de achterruit van zijn wagen.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Ebo;
