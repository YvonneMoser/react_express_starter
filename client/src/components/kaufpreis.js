import React, { Component } from "react";
import "./../css/Login.css";

class Kaufpreis extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div class="input-container">
        <h4 class="title">Kaufpreis & unmittelbare Nebenkosten</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-div">
            <label className="label-text">Quadratmeter</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.qm}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Kaufpreis</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.kaufpreis}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Kaufpreis/QM</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.kaufpreisqm
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Kaufnebenkosten</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.nettomiete}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Grunderwerbssteuer</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.grunderwerbssteuerSum
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Notar</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.notar
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Makler</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.maklerSum
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Gesamt</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamtOhneInstand
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Unmittelbare Instandhaltung</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.instandhaltung}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text bold-text">GESAMT</label>
            <input
              disabled
              className="input"
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
