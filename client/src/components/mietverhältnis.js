import React, { Component } from "react";
import "./../css/Login.css";
import InfoIcon from "@material-ui/icons/Info";
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
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.nettoqm
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
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Der Teil der Nebenkosten, den der Vermieter nicht auf den
                    Mieter umlegen kann und selbst zahlen muss. Objektabhängig -
                    circa 30%.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state && this.props.state.wohngeld
                  ? `${numberWithCommas(this.props.state.wohngeld)} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Umlagefähiges Wohngeld
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Der Teil der Nebenkosten, die der Mieter trägt.
                    Objektabhängig - circa 70%.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.umlagefähigeNebenkosten
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.umlagefähigeNebenkosten
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Nettomiete nach nicht-umlagefähigem Wohngeld
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Diesen Betrag kann der Vermieter nutzen um Zinsen und
                    Tilgung bei der Bank zu begleichen. Der Cashflow, den die
                    Immobilie für den Eigentümer generiert.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData
                  .nettoMieteNachNichtUmlagefähigenNK
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
