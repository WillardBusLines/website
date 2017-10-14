import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HeaderComponent from "./components/header-component";
import HomeComponent from "./components/home-component";
import "./App.css";

class App extends Component {
  render() {
    console.log("beggining render");
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/School-Buses" component={SchoolBuses} />
          <Route path="/Charters" component={Charters} />
          <Route path="/About-Us" component={AboutUs} />
          <Route path="/Contact-Us" component={ContactUs} />
        </div>
      </Router>
    );
  }
}

class SchoolBuses extends Component {
  render() {
    return (
      <HeaderComponent>
        <div>SchoolBuses</div>
      </HeaderComponent>
    );
  }
}

class Charters extends Component {
  render() {
    return (
      <HeaderComponent>
        <div>Charters</div>
      </HeaderComponent>
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
