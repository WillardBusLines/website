import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import HeaderComponent from "./header-component";

const textBoxStyle = {
  flex: "0 0 40%",
  whiteSpace: "pre-line",
  backgroundColor: "#e2bd50",
  borderRadius: "5px",
  border: "5px solid #c0c0c0",
  padding: "10px",
  textAlign: "left",
  margin: "20px auto 0px"
};

class AboutUsComponent extends Component {
  render() {
    return (
      <HeaderComponent>
        <div style={textBoxStyle}>
          <img
            style={{ float: "right", maxWidth: "100%" }}
            src={require("../gallery/Circa1991.png")}
            alt="Circa 1991"
          />
          {this.props.translate("about-us.blurb")}
        </div>
        <div style={textBoxStyle}>
          <img
            style={{ float: "left", margin: "0 10px 0 0", maxWidth: "100%" }}
            src={require("../gallery/LogoOnBus.png")}
            alt="Circa 1991"
          />
          <h4>{this.props.translate("about-us.history-title")}</h4>
          {this.props.translate("about-us.history")}
        </div>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(AboutUsComponent);
