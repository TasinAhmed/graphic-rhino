import React from "react";
import Image from "../../images/portfolio8.png";
import Main from "../../images/Magazine_crossmedia_cover.jpg";
import Header from "../../components/Header/Header";

function Magazine() {
  return (
    <>
      <Header image={Image} title="MAGAZINE CROSSMEDIA" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Main} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">MAGAZINE CROSSMEDIA</div>
            <p>
              Voor het vak crossmedia moest ik een magazine maken dat geschikt
              was voor druk, maar dat ook perfect kon gelezen worden op een
              iPad. De iPad versie moest voorzien worden van de nodige
              interactiviteit zoals tabs die je kan openen, video’s etc.
            </p>
            <br />
            <p>
              Het magazine moest over mezelf gaan of over iets waar je veel
              waarde aan hecht in je leven. In mijn geval was dit mijn hond
              Athena, in het magazine heb ik het dan ook uitgebreid over haar
              ras.
            </p>
          </div>
          <iframe
            src="https://indd.adobe.com/embed/5f156af8-64e6-498c-b232-ec801660fecc?startpage=1&allowFullscreen=true"
            width="525px"
            height="371px"
            frameborder="0"
            allowfullscreen=""
            title="magazine1"
            className="grid-full"
          ></iframe>
        </div>
      </main>
    </>
  );
}

export default Magazine;
