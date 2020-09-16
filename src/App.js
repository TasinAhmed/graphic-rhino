import React from "react";
import Footer from "./components/Footer/Footer";
import "./styles/App.min.css";
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
import ExampleBlog from "./pages/ExampleBlog/ExampleBlog";
import ExampleCase from "./pages/ExampleCase/ExampleCase";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/diensten" component={Diensten} />
          <Route path="/cases" component={Cases} />
          <Route path="/blog" component={Blog} />
          <Route path="/graveyard" component={Graveyard} />
          <Route path="/contact" component={Contact} />
          <Route path="/example-blog" component={ExampleBlog} />
          <Route path="/example-case" component={ExampleCase} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
