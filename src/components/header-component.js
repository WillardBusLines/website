import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTranslate,
  getActiveLanguage,
  setActiveLanguage
} from "react-localize-redux";

const pageStyle = {
  width: "90%",
  maxWidth: "990px",
  margin: "0 auto",
  textAlign: "center"
};

const headerTextStyle = {
  fontSize: "20px",
  textDecoration: "none",
  color: "black",
  width: "100%"
};

const activeFlagStyle = {
  height: "15px",
  width: "25px",
  border: "1px solid #777",
  padding: "2px"
};

const inactiveFlagStyle = {
  height: "15px",
  width: "25px",
  padding: "3px"
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
              {this.props.translate("header.home")}
            </Link>
            <Link style={headerTextStyle} to="/School-Buses">
              {this.props.translate("header.schoolbuses")}
            </Link>
            <Link style={headerTextStyle} to="/Charters">
              {this.props.translate("header.charters")}
            </Link>
            <Link style={headerTextStyle} to="/About-Us">
              {this.props.translate("header.aboutus")}
            </Link>
            <Link style={headerTextStyle} to="/Contact-Us">
              {this.props.translate("header.contactus")}
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%"
              }}
            >
              <div
                style={
                  this.props.currentLang == "en"
                    ? activeFlagStyle
                    : inactiveFlagStyle
                }
              >
                <img
                  style={{
                    height: "15px",
                    width: "25px",
                    cursor: "pointer"
                  }}
                  onClick={() => this.props.setActiveLanguage("en")}
                  src={require("../gallery/canadianFlag.png")}
                  alt="Canadian Flag"
                />
              </div>
              <div
                style={
                  this.props.currentLang == "fr"
                    ? activeFlagStyle
                    : inactiveFlagStyle
                }
              >
                <img
                  style={{
                    height: "15px",
                    width: "25px"
                  }}
                  onClick={() => this.props.setActiveLanguage("fr")}
                  src={require("../gallery/frenchFlag.png")}
                  alt="French Flag"
                />
              </div>
            </div>
          </div>
        </div>

        {this.props.children}

        <div style={{ textAlign: "left", fontSize: "12px" }}>
          © 2014 willardbuslines.ca
        </div>
        <div style={{ textAlign: "left", fontSize: "12px" }}>
          Logos by Phippen Signs
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLang: getActiveLanguage(state.locale).code
});

const mapDispatchToProps = { setActiveLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
