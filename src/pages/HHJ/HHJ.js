import React from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/hhjpreview2.jpg";
import Img1 from "../../images/hhj-1.jpg";
import Img2 from "../../images/hhj-2.jpg";
function HHJ() {
  return (
    <>
      <Header image={Image} title="HAPPY HANDMADE JEWELS, OUTRIJVE" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">HAPPY HANDMADE JEWELS, OUTRIJVE</div>
            <p>
              Happy Handmade Jewels is het resultaat van een uit de hand
              gelopen, verslavende hobby. Een hobby die uitdraaide tot een real
              life verkoophoek met bijhorende webshop. Om dit van de grond te
              krijgen heb je natuurlijk een logo nodig met bijpassende
              visitekaartjes. De juwelen van Happy Handmade Jewels zijn niet
              alledaags, en dat zijn hun visitekaartjes ook niet! De kaartjes
              worden afgewerkt met een matte laminaat en een glanzende vernis
              die enkel op het logo werd gebruikt. Deze afwerking wordt ook soms
              matte laminaat + spot UV lak genoemd. Wil je meer te weten over
              hoe we drukwerk kunnen afwerken? Aarzel dan niet om ons te
              contacteren!
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Om de verkoop op gang te krijgen wordt er een openingsweekend
              georganiseerd. Hiervoor werden niet alleen flyers en affiches
              gedrukt, maar ook op social media zaten we niet stil! Check maar
              eens de Facebook & Instagram pagina van Happy Handmade Jewels en
              Graphic Rhino. Wist je trouwens dat je niet alleen voor drukwerk
              bij ons terecht kan, maar ook voor online marketing advies en het
              beheer van je sociale media?
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default HHJ;
