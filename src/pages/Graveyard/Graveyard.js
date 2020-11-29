import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Background from "../../images/graveyard.jpg";
import Case from "../../components/Case/Case";
import cases from "./Cases";

const title = "Design graveyard";
const text =
  "Lang niet al onze ontwerpen worden gekozen door onze klant. Soms maken wij meerdere voorstellen op, tot we op de perfecte versie stoten. Maar, daarom zijn we nog niet minder trots op de afgewezen voorstellen. Dit plekje van de site is dan ook volledig toegewijd aan afgekeurde, ongebruikte ontwerpen of creatieve exploten.";
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
          {cases.map((x) => (
            <Case
              anim="fade-right"
              image={require("../../images/" + x.url)}
              title={x.title}
              desc={x.desc}
              link={x.linkTo}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Graveyard;
