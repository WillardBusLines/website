import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate, getActiveLanguage } from "react-localize-redux";
import HeaderComponent from "./header-component";
import FacebookProvider, { Page } from "react-facebook";

const textBoxStyle = {
  whiteSpace: "pre-line",
  backgroundColor: "#e2bd50",
  borderRadius: "5px",
  border: "5px solid #c0c0c0",
  padding: "10px"
};

class HomeComponent extends Component {
  render() {
    let stopImage;
    if (this.props.language.code === 'en') {
      stopImage = require("../gallery/en/IStopYouStop.png")
    } else {
      stopImage = require("../gallery/fr/IStopYouStop.png")
    }
    return (
      <HeaderComponent>
        <div style={{ padding: "20px", color: "red" }}>
          {this.props.translate("home.cancellations")}
          <a href="https://geoquery.netribus.ca/Cancellations.aspx">
            {this.props.translate("home.here")}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 2 }}>
            <img
              style={{ width: "95%" }}
              src={require("../gallery/GarageAndBuses.jpg")}
              alt="garage and buses"
            />
            <img
              style={{ width: "95%" }}
              src={stopImage}
              alt="I Stop You Stop"
            />
            <div>{this.props.translate("home.mission")}</div>
          </div>
          <div style={{ flex: 1.25, justifyContent: "space-between" }}>
            <div style={textBoxStyle}>{this.props.translate("home.blurb")}</div>
            <img
              style={{
                width: "100%",
                padding: "10px 0px 0px 0px"
              }}
              src={require("../gallery/55years.png")}
              alt="55 years"
            />
            <div style={{ width: "225px" }}>
              <FacebookProvider appId="132699010786769">
                <Page
                  href="http://www.facebook.com/WillardBusLines"
                  tabs={null}
                />
              </FacebookProvider>
            </div>
          </div>
        </div>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  language: getActiveLanguage(state.locale)
});

export default connect(mapStateToProps)(HomeComponent);
