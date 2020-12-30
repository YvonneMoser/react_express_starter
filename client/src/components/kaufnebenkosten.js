import React, { Component } from "react";
import "./../css/Login.css";

class Kaufpreis extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4 class="title">Kaufnebenkosten</h4>
        <div class="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text">Makler</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.maklerSum
                  ? `${this.props.state.calculatedData.maklerSum} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Notar</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.notar
                  ? `${this.props.state.calculatedData.notar} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Grunderwerbssteuer</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.grunderwerbssteuerSum
                  ? `${this.props.state.calculatedData.grunderwerbssteuerSum} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text bold-text">Nebenkosten gesamt</label>
              <p>
                {this.props.state && this.props.state.nettomiete
                  ? `${this.props.state.nettomiete} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text bold-text">
                Kaufpreis inkl Nebenkosten
              </label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamtOhneInstand
                  ? `${this.props.state.calculatedData.gesamtOhneInstand} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <label className="label-text bold-text">Zu finanzieren</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.gesamt
                  ? `${this.props.state.calculatedData.gesamt} €`
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
