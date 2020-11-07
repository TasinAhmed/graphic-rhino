import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/diensten.jpg";
import Ser1 from "../../images/service-1.png";
import Ser2 from "../../images/service-2.png";
import Ser3 from "../../images/service-3.png";
import Ser4 from "../../images/service-4.png";
import Ser5 from "../../images/service-5.png";
import Ser6 from "../../images/service-6.png";
import Ser7 from "../../images/service-7.png";
import Ser8 from "../../images/service-8.png";
import Ser9 from "../../images/service-9.png";
import Ser10 from "../../images/service-10.png";
import Ser11 from "../../images/service-11.png";
import Ser12 from "../../images/service-12.png";
import Service from "../../components/Service/Service";

const title = "Wat wij bieden";
const text =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.";

const desc = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.";

function Diensten() {
  const myRef = useRef(null);
  return (
    <>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="contacteer ons"
        link="/contact"
        scrollTo={myRef}
      />
      <main className="diensten" ref={myRef}>
        <section className="services">
          <div className="container">
            <Service image={Ser1} name="Grafisch ontwerp" desc={desc} />
            <Service image={Ser2} name="Drukwerk" desc={desc} />
            <Service image={Ser3} name="Animaties" desc={desc} />
            <Service image={Ser4} name="Online marketing" desc={desc} />
            <Service image={Ser5} name="Grafisch ontwerp" desc={desc} />
            <Service image={Ser6} name="Drukwerk" desc={desc} />
            <Service image={Ser7} name="Animaties" desc={desc} />
            <Service image={Ser8} name="Online marketing" desc={desc} />
            <Service image={Ser9} name="Grafisch ontwerp" desc={desc} />
            <Service image={Ser10} name="Drukwerk" desc={desc} />
            <Service image={Ser11} name="Drukwerk" desc={desc} />
            <Service image={Ser12} name="Drukwerk" desc={desc} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Diensten;
