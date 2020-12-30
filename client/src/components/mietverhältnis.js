import React, { Component } from "react";
import "./../css/Login.css";
import InfoIcon from "@material-ui/icons/Info";

class Mieteinnahmen extends Component {
  render() {
    return (
      <div>
        <h4 class="title">Mieteinnahmen und Nebenkosten</h4>
        <div class="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text">Netto/qm</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.nettoqm
                  ? `${this.props.state.calculatedData.nettoqm} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div class="info-icon-container-2">
                <label className="font-weight-normal">
                  Nicht umlagefähiges Wohngeld
                </label>
                <div className="no-button-style">
                  <InfoIcon fontSize="medium" className="info-icon" />
                  <span className="info-span">
                    Der Teil der Nebenkosten, die der Mieter trägt.
                    Objektabhängig - circa 70%.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state && this.props.state.wohngeld
                  ? `${this.props.state.wohngeld} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div class="info-icon-container-2">
                <label className="font-weight-normal">
                  umlagefähiges Wohngeld
                </label>
                <div className="no-button-style">
                  <InfoIcon fontSize="medium" className="info-icon" />
                  <span className="info-span">
                    Der Teil der Nebenkosten, die der Mieter trägt.
                    Objektabhängig - circa 70%.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.umlagefähigeNebenkosten
                  ? `${this.props.state.calculatedData.umlagefähigeNebenkosten} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
            <div className="output-div">
              <div class="info-icon-container-2">
                <label className="font-weight-normal">
                  Nettomiete nach nicht-umlagefähigem Wohngeld
                </label>
                <div className="no-button-style">
                  <InfoIcon fontSize="medium" className="info-icon" />
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
                  ? `${this.props.state.calculatedData.nettoMieteNachNichtUmlagefähigenNK} €`
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
