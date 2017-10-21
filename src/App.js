import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import SchoolBusesComponent from "./components/school-buses-component";
import ChartersComponent from "./components/charters-component";
import AboutUsComponent from "./components/about-us-component";
import ContactUsComponent from "./components/contact-us-component";
import "./App.css";

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/School-Buses" component={SchoolBusesComponent} />
          <Route path="/Charters" component={ChartersComponent} />
          <Route path="/About-Us" component={AboutUsComponent} />
          <Route path="/Contact-Us" component={ContactUsComponent} />
        </div>
      </Router>
    );
  }
}

export default App;