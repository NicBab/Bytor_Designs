import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components/index";
import {
  AboutPg,
  ContactPg,
  PortfolioPg,
  ResumePg,
  HomePg,
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePg} />
        <Route path="/about" component={AboutPg} />
        <Route path="/portfolio" component={PortfolioPg} />
        <Route path="/resume" component={ResumePg} />
        <Route path="/contact" component={ContactPg} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
