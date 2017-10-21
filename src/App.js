import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home-component";
import SchoolBusesComponent from "./components/school-buses-component";
import ChartersComponent from "./components/charters-component";
import AboutUsComponent from "./components/about-us-component";
import ContactUsComponent from "./components/contact-us-component";

import EnglishRedirectComponent from "./components/redirects/english-redirect-component";
import FrenchRedirectComponent from "./components/redirects/french-redirect-component";

import NoMatchComponent from "./components/no-match-component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/en" component={EnglishRedirectComponent} />
          <Route path="/fr" component={FrenchRedirectComponent} />

          <Route exact path="/" component={HomeComponent} />
          <Route path="/School-Buses" component={SchoolBusesComponent} />
          <Route path="/Charters" component={ChartersComponent} />
          <Route path="/About-Us" component={AboutUsComponent} />
          <Route path="/Contact-Us" component={ContactUsComponent} />

          <Route component={NoMatchComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
