import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTranslate,
  getActiveLanguage,
  setActiveLanguage
} from "react-localize-redux";
import MediaQuery from "react-responsive";
import DropdownMenu from "react-dd-menu";

const pageStyle = {
  width: "90%",
  maxWidth: "990px",
  margin: "0 auto",
  textAlign: "center"
};

const headerTextStyle = {
  fontSize: "17px",
  textDecoration: "none",
  color: "black",
  width: "100%",
  minWidth: "123px",
  whiteSpace: "nowrap"
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

const buttonStyle = {
  width: "20px"
};

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  headerLinks = () => {
    return (
      <div>
        <div>
          <Link style={headerTextStyle} to="/">
            {this.props.translate("header.home")}
          </Link>
        </div>
        <div>
          <Link style={headerTextStyle} to="/School-Buses">
            {this.props.translate("header.schoolbuses")}
          </Link>
        </div>
        <div>
          <Link style={headerTextStyle} to="/Charters">
            {this.props.translate("header.charters")}
          </Link>
        </div>
        <div>
          <Link style={headerTextStyle} to="/About-Us">
            {this.props.translate("header.aboutus")}
          </Link>
        </div>
        <div>
          <Link style={headerTextStyle} to="/Contact-Us">
            {this.props.translate("header.contactus")}
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%"
          }}
        >
          <div
            style={
              this.props.currentLang === "en"
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
              onClick={() => {
                this.props.setActiveLanguage("en");
                localStorage.setItem("language", "en");
              }}
              src={require("../gallery/canadianFlag.png")}
              alt="Canadian Flag"
            />
          </div>
          <div
            style={
              this.props.currentLang === "fr"
                ? activeFlagStyle
                : inactiveFlagStyle
            }
          >
            <img
              style={{
                height: "15px",
                width: "25px"
              }}
              onClick={() => {
                this.props.setActiveLanguage("fr");
                localStorage.setItem("language", "fr");
              }}
              src={require("../gallery/frenchFlag.png")}
              alt="French Flag"
            />
          </div>
        </div>{" "}
      </div>
    );
  };

  headerDrawer = () => {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: (
        <input
          type="image"
          src={require("../gallery/HamburgerIcon.png")}
          style={buttonStyle}
          alt="hamburger icon"
          onClick={this.toggle.bind(this)}
        />
      ),
      align: "center",
      closeOnInsideClick: false
    };
    return <DropdownMenu {...menuOptions}>{this.headerLinks()}</DropdownMenu>;
  };

  headerBar = () => {
    return (
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
              this.props.currentLang === "en"
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
              onClick={() => {
                this.props.setActiveLanguage("en");
                localStorage.setItem("language", "en");
              }}
              src={require("../gallery/canadianFlag.png")}
              alt="Canadian Flag"
            />
          </div>
          <div
            style={
              this.props.currentLang === "fr"
                ? activeFlagStyle
                : inactiveFlagStyle
            }
          >
            <img
              style={{
                height: "15px",
                width: "25px"
              }}
              onClick={() => {
                this.props.setActiveLanguage("fr");
                localStorage.setItem("language", "fr");
              }}
              src={require("../gallery/frenchFlag.png")}
              alt="French Flag"
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div style={pageStyle}>
        <div style={{ backgroundColor: "#e2bd50" }}>
          <div>
            <img
              style={{ maxWidth: "100%", display: "block" }}
              src={require("../gallery/BusLineupWithLogo.png")}
              alt="Lineup"
            />
            <MediaQuery query="(min-width: 1050px)">
              {doesMatch => {
                if (doesMatch) {
                  return this.headerBar();
                } else {
                  return this.headerDrawer();
                }
              }}
            </MediaQuery>
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
