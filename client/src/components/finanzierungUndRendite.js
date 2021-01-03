import React, { Component } from "react";
import "./../css/Login.css";
import InfoIcon from "@material-ui/icons/Info";
import { numberWithCommas } from "../helpers/calculator";

class RenditeObjekt extends Component {
  render() {
    return (
      <div>
        <h4 className="title">Finanzierung und Rendite</h4>
        <div className="output-container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="output-div">
              <label className="label-text bold-text">
                Jährliche Nettomietrendite
              </label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.jährlicheNettoMieteRendite
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.jährlicheNettoMieteRendite
                    )} %`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Monatliche Bankverbindlichkeit
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Die Bankverbindlichkeit setzt sich aus Zins und Tilgung
                    zusammen. Annuitätendarlehen haben während der
                    Sollzinsbindung (meist 10 Jahre) einen gleichbleibenden
                    Betrag. Der Anteil der Zinsen vs. Tilgung ist anfangs größer
                    und sinkt mit der Zeit.
                  </span>
                </div>
              </div>

              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.annuität
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.annuität
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">Monatlicher Saldo</label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Einnahmen nach Verbindlichkeiten. Nachdem die monatliche
                    Bankverbindlichkeit (Zins + Tilgung) und nicht-umlagefähige
                    Nebenkosten bezahlt sind bleibt dieser Betrag übrig. Ist er
                    negativ, muss der Vermieter monatlich nachschießen. Ist er
                    positiv, so generiert das Objekt auch nach Tilgung einen
                    Überschuss (cashflow-positiv).
                  </span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.differenzCashflowAnnuität
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.differenzCashflowAnnuität
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Steuerliches Ergebnis nach AfA
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">Fex muss liefern.</span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.steuerlichesErgebnisNachAfA
                  ? `${numberWithCommas(
                      this.props.state.calculatedData
                        .steuerlichesErgebnisNachAfA
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <label className="label-text">Tilgung nach 10 Jahren</label>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.tilgungNach10Jahren
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.tilgungNach10Jahren
                    )} €`
                  : "wird berechnet"}
              </p>
            </div>
            <br />

            <div className="output-div">
              <div className="info-icon-container-2">
                <label className="font-weight-normal">
                  Jahre bis zur Volltilgung
                </label>
                <div className="no-button-style">
                  <InfoIcon className="info-icon" />
                  <span className="info-span">
                    Hier wird angenommen, dass sich der Zins nicht verändert. In
                    der Praxis sind es meist 10 Jahre Sollzinsbindung, d.h. nach
                    10 Jahren wird mit neuen Konditionen die Restschuld
                    finanziert. Wie die Zinsen dann sind, kann man schwer
                    prognostizieren.
                  </span>
                </div>
              </div>
              <p>
                {this.props.state.calculatedData &&
                this.props.state.calculatedData.jahreBisTilgung
                  ? `${numberWithCommas(
                      this.props.state.calculatedData.jahreBisTilgung
                    )} Jahre`
                  : "wird berechnet"}
              </p>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default RenditeObjekt;
