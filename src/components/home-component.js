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

class HomeComponent extends Component {
  render() {
    console.log("rendering home");
    return (
      <HeaderComponent>
        <div style={{ padding: "20px", color: "red" }}>
          {this.props.translate("home.cancellations")}
          <a href="https://geoquery.netribus.ca/Cancellations.aspx">
            {this.props.translate("home.here")}
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 2 }}>
            <img
              style={{ width: "95%" }}
              src={require("../gallery/GarageAndBuses.jpg")}
            />
            <div>{this.props.translate("home.mission")}</div>
          </div>
          <div style={{ flex: 1.25, justifyContent: "space-between" }}>
            <div style={textBoxStyle}>{this.props.translate("home.blub")}</div>
            <img
              style={{
                width: "100%",
                padding: "10px 0px 0px 0px"
              }}
              src={require("../gallery/55years.png")}
              alt="55 years"
            />
            <FacebookProvider appId="132699010786769">
              <Like
                href="http://www.facebook.com/WillardBusLines"
                width="100"
              />
            </FacebookProvider>
          </div>
        </div>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(HomeComponent);
