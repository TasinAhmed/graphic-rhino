import React from "react";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Diensten from "./pages/Diensten/Diensten";
import Cases from "./pages/Cases/Cases";
import Blog from "./pages/Blog/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Graveyard from "./pages/Graveyard/Graveyard";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./ScrollToTop";
import Cookie from "./components/Cookie/Cookie";
import { CookiesProvider } from "react-cookie";
import LHS from "./pages/LFS/LHS";
import Debaveye from "./pages/Debaveye/Debaveye";
import HHJ from "./pages/HHJ/HHJ";
import Keurslager from "./pages/Keurslager/Keurslager";
import Ebo from "./pages/Ebo/Ebo";
import Cafetaria from "./pages/Cafetaria/Cafetaria";
import Pitta from "./pages/Pitta/Pitta";
import Malamute from "./pages/Malamute/Malamute";
import Eeckhout from "./pages/Eeckhout/Eeckhout";
import Slagerij from "./pages/Slagerij/Slagerij";
import Magazine from "./pages/Magazine/Magazine";
import Black from "./pages/Black/Black";
import Het from "./pages/Het/Het";
import Buitenreclame from "./pages/Buitenreclame/Buitenreclame";
import Kracht from "./pages/Kracht/Kracht";
import Motion from "./pages/Motion/Motion";
import Verpakkingen from "./pages/Verpakkingen/Verpakkingen";
import Waarom from "./pages/Waarom/Waarom";
import Belangrijk from "./pages/Belangrijk/Belangrijk";
import Sterk from "./pages/Sterk/Sterk";

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Menu />
          <Cookie />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/diensten" component={Diensten} />
            <Route path="/cases" component={Cases} />
            <Route path="/blog" component={Blog} />
            <Route path="/graveyard" component={Graveyard} />
            <Route path="/contact" component={Contact} />
            <Route path="/lhs" component={LHS} />
            <Route path="/debaveye" component={Debaveye} />
            <Route path="/hhj" component={HHJ} />
            <Route path="/keurslager" component={Keurslager} />
            <Route path="/ebo" component={Ebo} />
            <Route path="/cafetaria" component={Cafetaria} />
            <Route path="/pitta" component={Pitta} />
            <Route path="/malamute" component={Malamute} />
            <Route path="/ew" component={Eeckhout} />
            <Route path="/sc" component={Slagerij} />
            <Route path="/mc" component={Magazine} />
            <Route path="/db" component={Black} />
            <Route path="/het" component={Het} />
            <Route path="/bc" component={Buitenreclame} />
            <Route path="/dkvp" component={Kracht} />
            <Route path="/ma" component={Motion} />
            <Route path="/ver" component={Verpakkingen} />
            <Route path="/wv" component={Waarom} />
            <Route path="/bel" component={Belangrijk} />
            <Route path="/sterk" component={Sterk} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
