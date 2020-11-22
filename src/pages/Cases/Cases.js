import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/cases.jpg";
import Masonry from "../../components/Masonry/Masonry";
import Images from "./Images";

const title = "Ons werk";
const text =
  "We kunnen het nu eenmaal niet ontkennen, wij zijn trots op wat we maken. Terecht? Daar kan je helemaal zelf over oordelen, scrol gerust eens door onze projecten!";

function Cases() {
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
      <main className="cases" ref={myRef}>
        <div className="container">
          <Masonry images={Images} />
        </div>
      </main>
    </>
  );
}

export default Cases;
