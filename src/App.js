import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HeaderComponent from "./components/header-component";
import HomeComponent from "./components/home-component";
import SchoolBusesComponent from "./components/school-buses-component";
import ChartersComponent from "./components/charters-component";
import "./App.css";

class App extends Component {
  render() {
    console.log("beggining render");
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/School-Buses" component={SchoolBusesComponent} />
          <Route path="/Charters" component={ChartersComponent} />
          <Route path="/About-Us" component={AboutUs} />
          <Route path="/Contact-Us" component={ContactUs} />
        </div>
      </Router>
    );
  }
}

class AboutUs extends Component {
  render() {
    return (
      <HeaderComponent>
        <div>AboutUs</div>
      </HeaderComponent>
    );
  }
}

class ContactUs extends Component {
  render() {
    return (
      <HeaderComponent>
        <div>ContactUs</div>
      </HeaderComponent>
    );
  }
}

export default App;
