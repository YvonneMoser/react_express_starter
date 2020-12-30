import React, { Component } from "react";
import "./../css/Login.css";

class Bank extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Bank</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-div">
            <label className="label-text">Eigenkapital</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.eigenkapital}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Zu finanzieren</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.zuFinanzierendeSumme
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Zinsen</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.zinsen}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Tilgunsrate</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={this.props.state && this.props.state.tilgungsrate}
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Annuität</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.annuität
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Differenz Cashflow/ Annuität</label>
            <input
              disabled
              className="input"
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
