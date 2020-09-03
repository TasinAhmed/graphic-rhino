import React from "react";
import Header from "./components/Header/Header";
import "./styles/App.min.css";
import Menu from "./components/Menu/Menu";
import Background from "./images/home.png";

const title = "TAKE DESIGN BY IT’S HORNS";
const text =
  "Net als een stevige neushoorn leveren wij sterk grafisch werk! Wij gaan voor het niet alledaagse en bieden een grote variatie aan mogelijkheden.";

function App() {
  return (
    <main className="App">
      <Menu />
      <Header image={Background} title={title} text={text} />
    </main>
  );
}

export default App;
