import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setActiveLanguage } from "react-localize-redux";

class EnglishRedirectComponent extends Component {
  render() {
    const loc = this.props.location.pathname;
    const redirctPath = loc.substring(3);
    this.props.setActiveLanguage("fr");
    localStorage.setItem("language", "fr");
    return <Redirect to={redirctPath} />;
  }
}

const mapDispatchToProps = { setActiveLanguage };

export default connect(null, mapDispatchToProps)(EnglishRedirectComponent);
