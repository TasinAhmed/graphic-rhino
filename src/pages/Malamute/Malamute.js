import React from "react";
import Image from "../../images/portfolio3.jpg";
import Img1 from "../../images/malamute-1.png";
import Img2 from "../../images/malamute-2.png";
import Img3 from "../../images/malamute-3.png";
import Header from "../../components/Header/Header";

function Malamute() {
  return (
    <>
      <Header image={Image} title="MALAMUTE MATTERS, GROOT-BRITTANNIË" />
      <main className="lhs">
        <div className="container case-container">
          <img src={Img1} className="case-img" alt="" />
          <div className="case-content">
            <div className="case-title">MALAMUTE MATTERS, GROOT-BRITTANNIË</div>
            <p>
              Malamute Matters is een liefdadigheidsinstelling in
              Groot-Brittannië. Ze zamelen geld in voor honden en sturen dit
              naar verschillende goede doelen. Deze goede doelen zijn vaak
              asielen die een noodgeval binnenkrijgen en het geld niet hebben om
              de hond te helpen, soms zijn het ook asielen die problemen hebben
              met het betalen van hun vaste kosten. Ze steunen ook goede doelen
              die honden weghalen in Azië die bedoeld zijn om op te eten tijdens
              eetfestijnen. Ze zamelen vooral geld in via acties op hun Facebook
              pagina en verkoop via hun webshop.
            </p>
          </div>
          <img src={Img2} className="case-img grid-img-r" alt="" />
          <div className="case-content grid-text-l">
            <p>
              Zelf werk ik als vrijwilliger voor Malamute Matters en design ik
              ook vaak voor hen. Een van de dingen die ik meermaals per jaar mag
              ontwerpen zijn de Rescue Tails, dit is een folder met een paar van
              de honden die ze geholpen hebben. Hierin kan je dan het verhaal
              lezen van de hond, hoe ze er aan toe waren, hoe ze gered werden en
              hoe het nu met ze is.
            </p>
          </div>
          <img src={Img3} className="case-img" alt="" />
          <div className="case-content">
            <p>
              Verder heb ik ook een formulier opgemaakt dat verstuurd wordt in
              combinatie met de ‘donation pack’ folder. Dit bevat alle
              informatie om potentiële sponsers te overtuigen om hen te helpen
              en toont ook zeer duidelijk wat we doen.
            </p>
            <p>
              Zoals ik al eerder verteld heb doen ze ook vaak competities op
              Facebook. Voor elke competitie of event wordt er een banner
              ontworpen om mensen hun aandacht te trekken. De banner bevat
              altijd informatie rond het event en in de Facebook post bij de
              banner wordt er ook altijd extra informatie gegeven.
            </p>
            <p>
              Malamute Matters Een van de laatste dingen die ik heb gemaakt voor
              Malamute Matters is een nieuwsbrief. Deze kan je enkel bekijken
              tegen betaling, als sponsoring voor hun organisatie. Je kan de
              nieuwsbrief ontvangen door £ 1 te betalen via PayPal aan
              paypal@malamutematters.co.uk
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Malamute;
