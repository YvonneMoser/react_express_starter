import React, { Component } from "react";
import "./../css/Login.css";
import { numberWithCommas } from "../helpers/calculator";

class Kaufpreis extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Kaufpreis und Kaufnebenkosten</h4>
        <div className="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text">Kaufpreis/qm</label>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.kaufpreisqm) ||
                this.props.state.calculatedData.kaufpreisqm === 0
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.kaufpreisqm
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Makler</label>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.maklerSum) ||
                this.props.state.calculatedData.maklerSum === 0
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
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.notar) ||
                this.props.state.calculatedData.notar === 0
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
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.grunderwerbssteuerSum) ||
                this.props.state.calculatedData.grunderwerbssteuerSum === 0
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
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.nebenkostenGesamt) ||
                this.props.state.calculatedData.nebenkostenGesamt === 0
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
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.gesamtOhneInstand) ||
                this.props.state.calculatedData.gesamtOhneInstand === 0
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
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.zuFinanzieren) ||
                this.props.state.calculatedData.zuFinanzieren === 0
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
