import React, { Component } from "react";
import "./../css/Login.css";

class Mieteinnahmen extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Mieteinnahmen und Nebenkosten</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputLogin">
            <label className="labelIcon">Nettomiete</label>
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
            <label className="labelIcon">Netto pro QM</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.nettoqm
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Wohngeld</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.wohngeld}
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Davon umlagefähig</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.umlagefähigeNebenkosten
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">Nicht umlagefähig</label>
            <input
              disabled
              className="input-login"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.nichtUmlageFähigeNebenkosten
              }
            />
          </div>
          <br />
          <div className="inputLogin">
            <label className="labelIcon">
              Nettomiete nach nichtumlagefähigen NK
            </label>
            <input
              disabled
              className="input-login"
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
