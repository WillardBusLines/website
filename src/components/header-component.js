import React, { Component } from "react";
import { Link } from "react-router-dom";

const pageStyle = {
  width: "90%",
  maxWidth: "990px",
  margin: "0 auto",
  textAlign: "center"
};

const headerTextStyle = {
  fontSize: "20px",
  textDecoration: "none",
  color: "black"
};

class HeaderComponent extends Component {
  render() {
    return (
      <div style={pageStyle}>
        <div style={{ backgroundColor: "#e2bd50" }}>
          <div>
            <img
              style={{ maxWidth: "100%" }}
              src={require("../gallery/BusLineup.jpg")}
              alt="Lineup"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "5px"
            }}
          >
            <Link style={headerTextStyle} to="/">
              Home
            </Link>
            <Link style={headerTextStyle} to="/School-Buses">
              School Buses
            </Link>
            <Link style={headerTextStyle} to="/Charters">
              Charters
            </Link>
            <Link style={headerTextStyle} to="/About-Us">
              About Us
            </Link>
            <Link style={headerTextStyle} to="/Contact-Us">
              Contact Us
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <img
                style={{ height: "15px" }}
                src={require("../gallery/britishFlag.png")}
                alt="British Flag"
              />
              <img
                style={{ height: "15px" }}
                src={require("../gallery/frenchFlag.png")}
                alt="French Flag"
              />
            </div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default HeaderComponent;
