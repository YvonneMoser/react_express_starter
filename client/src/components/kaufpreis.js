import React, { Component } from "react";
import "./../css/Login.css";

class Kaufpreis extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div class="input-container">
        <h4 class="title">Kaufpreis & unmittelbare Nebenkosten</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputLogin">
            <label className="labelIcon">Quadratmeter</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.qm}
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Kaufpreis</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.kaufpreis}
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Kaufpreis/QM</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.kaufpreisqm
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Kaufnebenkosten</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.nettomiete}
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Grunderwerbssteuer</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.grunderwerbssteuerSum
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Notar</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.notar
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Makler</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.maklerSum
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Gesamt</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamtOhneInstand
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Unmittelbare Instandhaltung</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.instandhaltung}
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon boldText">GESAMT</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamt
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Kaufpreis;
