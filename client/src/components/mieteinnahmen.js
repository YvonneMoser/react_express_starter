import React, { Component } from "react";
import "./../css/Login.css";

class Mieteinnahmen extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Mieteinnahmen und Nebenkosten</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-container">
            <label className="input-label">Nettomiete</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.nettomiete}
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Netto pro QM</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.nettoqm
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Wohngeld</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.wohngeld}
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Davon umlagefähig</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.umlagefähigeNebenkosten
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Nicht umlagefähig</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.nichtUmlageFähigeNebenkosten
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">
              Nettomiete nach nichtumlagefähigen NK
            </label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData
                  .nettoMieteNachNichtUmlagefähigenNK
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Mieteinnahmen;
