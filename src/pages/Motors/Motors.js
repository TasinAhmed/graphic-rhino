import React from "react";
import Header from "../../components/Header/Header";
import HeadImg from "../../images/ec.jpg";
import Img1 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen.jpg";
import Img2 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen2.jpg";
import Img3 from "../../images/MIGmotors_billboard_3850x2850_0220_voorstellen3.jpg";

function Motors() {
  return (
    <>
      <Header title="MIG Motors" image={HeadImg} />
      <div className="motors">
        <div className="container motors__container">
          <div className="motors__left">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
          </div>
          <div className="motors__right">
            <h2 className="motors__title">MIG Motors</h2>
            <p>
              MIG Motors is een officiële dealer van Audi, Volkswagen, Seat en
              Škoda in regio Gent. Ze onderscheiden zich door middel van hun 3
              pijlers: productaanbod, dienstverlening en imago, maar daar
              vertellen ze je graag meer over als je even langsgaat voor een
              nieuwe (tweedehands)wagen.
            </p>
            <p>
              Je kent het wel die grote banners van garages en automerken die je
              onderweg vaak tegen komt, meestal gebruiken ze hier standaard
              beelden voor. Bij MIG Motors wouden ze het net iets anders
              aanpakken en zochten ze een beeld die hun boodschap duidelijk
              weergeeft, nl voor jouw droomwagen moét je bij MIG Motors zijn!
              Hier vind je alvast enkele van onze voorstellen terug.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Motors;
