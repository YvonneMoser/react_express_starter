import React, { Component } from "react";
import "./../css/Login.css";

class Ausblick extends Component {
  render() {
    return (
      <div class="input-container">
        <h4 class="title">Ausblick</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-div">
            <label className="label-text">Tilgung nach 10 Jahren</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.tilgungNach10Jahren
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Kompletttilgung</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.jahreBisTilgung
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Cashflow nach 10 Jahren</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.cashFlowNach10Jahren
              }
            />
          </div>
          <br />
          <div className="input-div">
            <label className="label-text">Zu versteuern nach 10 Jahren</label>
            <input
              disabled
              className="input"
              type="text"
              placeholder="wird berechnet"
              value={
                this.props.state.calculatedData &&
                this.props.state.calculatedData.zuVersteuernNach10Jahren
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Ausblick;
