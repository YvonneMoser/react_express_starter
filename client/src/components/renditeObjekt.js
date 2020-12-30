import React, { Component } from "react";
import "./../css/Login.css";

class RenditeObjekt extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Rendite des Objekts</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputLogin">
            <label className="labelIcon">Jährliche Nettomiete nach NK</label>
            <input
              disabled
              className="input-login"
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
          <div className="inputLogin">
            <label className="labelIcon">
              Steuerliches Ergebnis (nach AfA)
            </label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.steuerlichesErgebnisNachAfA
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Jährliche Nettomietrendite</label>
            <input
              disabled
              className="input-login"
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
