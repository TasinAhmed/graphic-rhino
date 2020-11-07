import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Image from "../../images/michelsberg.jpg";

function ExampleCase() {
  const myRef = useRef(null);
  return (
    <>
      <Header
        image={Image}
        title="Cafetaria Michelsberg, Spiere-Helkijn"
        text="Cafetaria Michelsberg ligt in het sportcomplex van Spiere-Helkijn. Hier komen verschillende scholen en sportgroepen over de vloer. Emily Balcaen & Mathias De Lombaerde zijn hier onlangs de nieuwe uitbaters van geworden. Bij nieuwe uitbaters hoort uiteraard ook een nieuwe huisstijl."
        scrollTo={myRef}
      />
      <main className="example-case" ref={myRef}>
        <div className="container"></div>
      </main>
    </>
  );
}

export default ExampleCase;
