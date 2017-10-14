import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import HeaderComponent from "./header-component";
import FacebookProvider, { Like } from "react-facebook";

const textBoxStyle = {
  whiteSpace: "pre-line",
  backgroundColor: "#e2bd50",
  borderRadius: "5px",
  border: "5px solid #c0c0c0",
  padding: "10px"
};

class SchoolBusesComponent extends Component {
  render() {
    return (
      <HeaderComponent>
        <div style={{ padding: "20px", color: "red" }}>
          {this.props.translate("school-buses.cancellations")}
          <a href="https://geoquery.netribus.ca/Cancellations.aspx">
            {this.props.translate("school-buses.here")}
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: "90%", padding: "10px" }}
              src={require("../gallery/BusTop.jpg")}
              alt="Bus Top"
            />
          </div>
          <div style={textBoxStyle}>
            {this.props.translate("school-buses.blurb1")}
            <a href="http://www.netribus.ca/en/index.php">
              {this.props.translate("school-buses.here")}
            </a>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={textBoxStyle}>
            {this.props.translate("school-buses.blurb2")}
          </div>
          <div>
            <img
              style={{ height: "90%", padding: "10px" }}
              src={require("../gallery/BusBuddies.jpg")}
              alt="Bus Top"
            />
          </div>
        </div>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(SchoolBusesComponent);
