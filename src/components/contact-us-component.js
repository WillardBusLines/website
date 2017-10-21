import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import HeaderComponent from "./header-component";

const textBoxStyle = {
  flex: "0 0 30%",
  whiteSpace: "pre-line",
  backgroundColor: "#e2bd50",
  borderRadius: "5px",
  border: "5px solid #c0c0c0",
  padding: "10px",
  textAlign: "left",
  margin: "20px 0 0"
};

const buttonStyle = {
  padding: "7px",
  display: "table",
  margin: "0px",
  color: "black",
  backgroundColor: "white",
  border: "2px solid #c0c0c0",
  textDecoration: "none",
  borderRadius: "5px"
};

class ContactUsComponent extends Component {
  render() {
    return (
      <HeaderComponent>
        <h3 style={{ textAlign: "left" }}>
          {this.props.translate("contact-us.opportunities-title")}
        </h3>
        <div style={{ textAlign: "left", fontSize: "14px" }}>
          {this.props.translate("contact-us.opportunities")}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <div style={textBoxStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div>{this.props.translate("contact-us.apply")}</div>
              <div>
                <center style={{ position: "relative" }}>
                  <a
                    href={require("../gallery/ApplicationForm2013.pdf")}
                    style={buttonStyle}
                  >
                    {this.props.translate("contact-us.apply-button")}
                  </a>
                </center>
              </div>
            </div>
          </div>
          <div style={textBoxStyle}>
            {this.props.translate("contact-us.info-1")}
            <a href="mailto:willardbuslines@gmail.com">
              {this.props.translate("contact-us.info-email")}
            </a>
            {this.props.translate("contact-us.info-2")}
          </div>
        </div>
        <img
          style={{ margin: "20px 0 0", maxWidth: "100%" }}
          src={require("../gallery/YardByDrone.jpg")}
          alt="Bus In Fall"
        />
      </HeaderComponent>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
});

export default connect(mapStateToProps)(ContactUsComponent);
