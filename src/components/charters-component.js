import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import HeaderComponent from "./header-component";
import { Link } from "react-router-dom";

const textBoxStyle = {
  flex: "0 0 40%",
  whiteSpace: "pre-line",
  backgroundColor: "#e2bd50",
  borderRadius: "5px",
  border: "5px solid #c0c0c0",
  padding: "10px",
  textAlign: "left",
  margin: "20px auto 20px"
};

class ChartersComponent extends Component {
  render() {
    return (
      <HeaderComponent>
        <div style={textBoxStyle}>
          {this.props.translate("charters.blurb")}
          <Link to="/Contact-Us">
            {this.props.translate("charters.contact")}
          </Link>
          {this.props.translate("charters.page")}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={require("../gallery/Charter1.jpg")} alt="Charter 1" />
          <img src={require("../gallery/Charter2.jpg")} alt="Charter 2" />
          <img src={require("../gallery/Charter3.jpg")} alt="Charter 3" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={require("../gallery/Charter4.jpg")} alt="Charter 4" />
          <img src={require("../gallery/Charter5.jpg")} alt="Charter 5" />
          <img src={require("../gallery/Charter6.jpg")} alt="Charter 6" />
          <img src={require("../gallery/Charter7.jpg")} alt="Charter 7" />
        </div>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(ChartersComponent);
