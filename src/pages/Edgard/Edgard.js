import React from "react";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/ec.jpg";
import Img1 from "../../images/Business card_new contact_NL.jpg";
import Img2 from "../../images/Business card_new contact_FR.jpg";
import Img3 from "../../images/EC_post it block_75x75_01.jpg";
import Img4 from "../../images/EC_post it block_75x75_02.jpg";

function Edgard() {
  return (
    <>
      <Header title="Edgard & Cooper" image={HeadImg} />
      <div className="edgard">
        <div className="container edgard__container">
          <div className="edgard__left">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
          </div>
          <div className="edgard__right">
            <h2 className="edgard__title">Edgard & Cooper</h2>
            <p>
              Edgard & Cooper is een van onze vaste klanten, een snelgroeiende
              start-up die gezond honden- en katteneten maakt. Dat eten bestaat
              uit vers vlees en groenten verpakt in 100% biologisch afbreekbare
              zakken. Wist je ook dat ze 1% van hun omzet doneren aan een goed
              doel?
            </p>
            <p>
              Een van onze opdrachten bestond er uit om een post-it blok te
              ontwerpen alsook een visitekaartje met de gegevens van hun
              hulplijn. Zoals bij veel opdrachten gingen hier verschillende
              rondes met ontwerpen over, maar daarom zijn we niet minder trots
              op ons werk! Hier vind je alvast terug wat het niet geworden is.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edgard;
