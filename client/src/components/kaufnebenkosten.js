import React, { Component } from "react";
import "./../css/Login.css";
import { numberWithCommas } from "../helpers/calculator";

class Kaufpreis extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Kaufnebenkosten</h4>
        <div className="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text">Makler</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.maklerSum
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.maklerSum
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Notar und Grundbuch</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.notar
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.notar
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Grunderwerbssteuer</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.grunderwerbssteuerSum
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.grunderwerbssteuerSum
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text bold-text">Nebenkosten gesamt</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.nebenkostenGesamt
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.nebenkostenGesamt
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text bold-text">
                Kaufpreis inkl. Nebenkosten
              </label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamtOhneInstand
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.gesamtOhneInstand
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <label className="label-text bold-text">Zu finanzieren</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.zuFinanzieren
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.zuFinanzieren
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Kaufpreis;
