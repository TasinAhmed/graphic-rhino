import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/graveyard.jpg";
import Case from "../../components/Case/Case";
import Image from "../../images/explore-1.jpg";

const title = "Design graveyard";
const text =
  "Lang niet al onze ontwerpen worden gekozen door onze klant. Soms maken wij meerdere voorstellen op, tot we op de perfecte versie stoten. Maar, daarom zijn we nog niet minder trots op de afgewezen voorstellen. Dit plekje van de site is dan ook volledig toegewijd aan afgekeurde, ongebruikte ontwerpen of creatieve exploten.";
const desc =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ";

function Graveyard() {
  const myRef = useRef(null);
  return (
    <>
      <Header
        image={Background}
        title={title}
        text={text}
        btnText="bekijk ons werk"
        link="/cases"
        scrollTo={myRef}
      />
      <main className="graveyard" ref={myRef}>
        <div className="container">
          <Case
            anim="fade-right"
            image={Image}
            title="Case title"
            desc={desc}
          />
          <Case
            anim="fade-right"
            image={Image}
            mirror={true}
            title="Case title"
            desc={desc}
          />
          <Case
            anim="fade-right"
            image={Image}
            title="Case title"
            desc={desc}
          />
          <Case
            anim="fade-right"
            image={Image}
            mirror={true}
            title="Case title"
            desc={desc}
          />
          <Case
            anim="fade-right"
            image={Image}
            title="Case title"
            desc={desc}
          />
          <Case
            anim="fade-right"
            image={Image}
            mirror={true}
            title="Case title"
            desc={desc}
          />
        </div>
      </main>
    </>
  );
}

export default Graveyard;
