import React, { Component } from "react";
import "./../css/Login.css";

class RenditeObjekt extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Rendite des Objekts</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-container">
            <label className="input-label">Jährliche Nettomiete nach NK</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData
                  .jährlicheNettomieteNachNichtumlagefähigenNebenkosten
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">
              Steuerliches Ergebnis (nach AfA)
            </label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.steuerlichesErgebnisNachAfA
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Jährliche Nettomietrendite</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.jährlicheNettoMieteRendite
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default RenditeObjekt;
