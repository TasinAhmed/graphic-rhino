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
          </Switch>
          <Footer />
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
