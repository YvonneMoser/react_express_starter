import React, { Component } from "react";
import "./../css/Login.css";

class Bank extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Bank</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-container">
            <label className="input-label">Eigenkapital</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.eigenkapital}
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Zu finanzieren</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.zuFinanzierendeSumme
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Zinsen</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.zinsen}
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Tilgunsrate</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.tilgungsrate}
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Annuität</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.annuität
              }
            />
          </div>
          <br />
          <div className="input-container">
            <label className="input-label">Differenz Cashflow/ Annuität</label>
            <input
              disabled
              className="input-field"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.differenzCashflowAnnuität
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Bank;
