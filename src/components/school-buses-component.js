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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px"
          }}
        >
          <div style={{ flex: "0 0 40%", padding: "15px" }}>
            <img
              style={{ width: "100%" }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px"
          }}
        >
          <div style={textBoxStyle}>
            {this.props.translate("school-buses.blurb2")}
          </div>
          <div style={{ flex: "0 0 40%", padding: "15px" }}>
            <img
              style={{ width: "100%" }}
              src={require("../gallery/BusBuddies.jpg")}
              alt="Bus Top"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px"
          }}
        >
          <div style={{ flex: "0 0 40%", padding: "15px" }}>
            <img
              style={{ width: "100%" }}
              src={require("../gallery/bus-buddies-poster-NL.png")}
              alt="Bus Top"
            />
          </div>
          <div style={{ flex: "0 0 40%", padding: "15px" }}>
            <img
              style={{ width: "100%" }}
              src={require("../gallery/bus-buddies-poster-KL.png")}
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
