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

const flagImageStyle = {
  height: "15px",
  width: "25px",
  cursor: "pointer"
};

const headerTextStyle = {
  fontSize: "17px",
  textDecoration: "none",
  color: "black",
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

  renderSingleLink(to, text) {
    return (
      <div style={{ width: "100%" }}>
        <Link style={headerTextStyle} to={to}>
          {this.props.translate(text)}
        </Link>
      </div>
    );
  }

  renderLinks() {
    return [
      this.renderSingleLink("/", "header.home"),
      this.renderSingleLink("/School-Buses", "header.schoolbuses"),
      this.renderSingleLink("/Charters", "header.charters"),
      this.renderSingleLink("/About-Us", "header.aboutus"),
      this.renderSingleLink("/Contact-Us", "header.contactus")
    ];
  }

  renderFlag(lang) {
    const flagStyle =
      this.props.currentLang === lang ? activeFlagStyle : inactiveFlagStyle;
    return (
      <div style={flagStyle}>
        <img
          style={flagImageStyle}
          onClick={() => {
            this.props.setActiveLanguage(lang);
            localStorage.setItem("language", lang);
          }}
          src={require(`../gallery/${lang}Flag.png`)}
          alt={`${lang} Flag`}
        />
      </div>
    );
  }

  renderHeaderBar() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "5px"
        }}
      >
        {this.renderLinks()}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%"
          }}
        >
          {this.renderFlag("en")}
          {this.renderFlag("fr")}
        </div>
      </div>
    );
  }

  renderHeaderDrawer() {
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
    return (
      <DropdownMenu {...menuOptions}>
        {this.renderLinks()}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%"
          }}
        >
          {this.renderFlag("en")}
          {this.renderFlag("fr")}
        </div>
      </DropdownMenu>
    );
  }

  render() {
    return (
      <div style={pageStyle}>
        <div style={{ backgroundColor: "#e2bd50" }}>
          <img
            style={{ maxWidth: "100%", display: "block" }}
            src={require("../gallery/BusLineupWithLogo.png")}
            alt="Lineup"
          />
          <MediaQuery query="(min-width: 1050px)">
            {doesMatch => {
              if (doesMatch) {
                return this.renderHeaderBar();
              } else {
                return this.renderHeaderDrawer();
              }
            }}
          </MediaQuery>
        </div>

        {this.props.children}

        <div style={{ textAlign: "left", fontSize: "12px" }}>
          © 2014 willardbuslines.ca
          <br />
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
