import React, { Component } from "react";
import "./../css/Login.css";
import { numberWithCommas } from "../helpers/calculator";

class Mieteinnahmen extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Mietverhältnis</h4>
        <div className="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text">Kaltmiete/qm</label>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.nettoqm) ||
                this.props.state.calculatedData.nettoqm === 0
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.nettoqm
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Nicht umlagefähiges Wohngeld
                  <span className="no-button-style">
                    ⓘ{" "}
                    <span className="info-span">
                      Der Teil der Nebenkosten, den der Vermieter nicht auf den
                      Mieter umlegen kann und selbst zahlen muss. Objektabhängig
                      - circa 30%.
                    </span>
                  </span>
                </label>
              </div>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.nichtUmlageFähigesWohngeld) ||
                this.props.state.calculatedData.nichtUmlageFähigesWohngeld === 0
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.nichtUmlageFähigesWohngeld
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Umlagefähiges Wohngeld
                  <span className="no-button-style">
                    ⓘ{" "}
                    <span className="info-span">
                      Der Teil der Nebenkosten, die der Mieter trägt.
                      Objektabhängig - circa 70%.
                    </span>
                  </span>
                </label>
              </div>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData.umlagefähigesWohngeld) ||
                this.props.state.calculatedData.umlagefähigesWohngeld === 0
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.umlagefähigesWohngeld
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div className="info-icon-container-2">
                <label
                  className="font-weight-normal"
                  // style={{ display: "flex", flexDirection: "row" }}
                >
                  Kaltmiete nach nicht-umlagefähigem Wohngeld
                  <span className="no-button-style">
                    ⓘ{" "}
                    <span className="info-span">
                      Diesen Betrag kann der Vermieter nutzen um Zinsen und
                      Tilgung bei der Bank zu begleichen. Der Cashflow, den die
                      Immobilie für den Eigentümer generiert.
                    </span>
                  </span>
                </label>
              </div>
              <p>
                {(this.props.state.calculatedData &&
                  this.props.state.calculatedData
                    .nettoMieteNachNichtUmlagefähigenNK) ||
                this.props.state.calculatedData
                  .nettoMieteNachNichtUmlagefähigenNK === 0
                  ? `${numberWithCommas(
                      this.props.state.calculatedData
                        .nettoMieteNachNichtUmlagefähigenNK
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Mieteinnahmen;
