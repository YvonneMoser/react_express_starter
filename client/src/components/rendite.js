import React, { Component } from "react";
import "./../css/Login.css";
import { calculateReturnOnInvest } from "../helpers/calculator";
import Kaufpreis from "./kaufnebenkosten";
import Mieteinnahmen from "./mietverhältnis";
import RenditeObjekt from "./finanzierungUndRendite";
import InfoIcon from "@material-ui/icons/Info";
import { animateScroll as scroll } from "react-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const queryString = require("query-string");

class Login extends Component {
  state = {
    qm: "",
    makler: "",
    instandhaltung: "",
    nettomiete: "",
    wohngeld: "",
    bundesland: "",
    kaufpreis: "",
    eigenkapital: "",
    zinsen: "",
    tilgungsrate: "",
    calculatedData: undefined,
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const {
      eigenkapital,
      qm,
      makler,
      instandhaltung,
      nettomiete,
      wohngeld,
      bundesland,
      kaufpreis,
      zinsen,
      tilgungsrate,
    } = this.state;
    // const sum = await calculator.calculate({
    //   qm,
    //   makler,
    //   instandhaltung,
    //   nettomiete,
    //   wohngeld,
    //   grunderwerbssteuer,
    //   kaufpreis,
    //   eigenkapital,
    //   zinsen,
    //   tilgungsrate,
    // });

    const sum = calculateReturnOnInvest({
      qm,
      makler,
      instandhaltung,
      nettomiete,
      wohngeld,
      bundesland,
      kaufpreis,
      eigenkapital,
      zinsen,
      tilgungsrate,
    });
    this.setState({ calculatedData: sum });
    this.generateLink();
    scroll.scrollMore(800);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSelectChange = () => {
    const valueName = document.getElementById("bundesland").value;
    this.setState({ bundesland: valueName });
  };

  componentDidMount() {
    const savedDataFromUrl = queryString.parse(this.props.location.search);
    const savedDataArray = Object.keys(savedDataFromUrl);
    const dataToBeSet = [
      "eigenkapital",
      "qm",
      "makler",
      "instandhaltung",
      "nettomiete",
      "wohngeld",
      "bundesland",
      "kaufpreis",
      "zinsen",
      "tilgungsrate",
    ];
    savedDataArray.map((key) => {
      if (dataToBeSet.includes(key)) {
        if (key !== "bundesland") {
          this.setState({ [key]: Number(savedDataFromUrl[key]) });
        } else {
          this.setState({ [key]: savedDataFromUrl[key] });
        }
      }
    });
  }

  getDefaultValue() {
    const savedDataFromUrl = queryString.parse(this.props.location.search);
    return savedDataFromUrl.bundesland || "";
  }

  generateLink() {
    let link = "https://immo-return.com/#/rendite?";
    const dataToBeSet = [
      "eigenkapital",
      "qm",
      "makler",
      "instandhaltung",
      "nettomiete",
      "wohngeld",
      "bundesland",
      "kaufpreis",
      "zinsen",
      "tilgungsrate",
    ];

    if (this.state) {
      dataToBeSet.map((key) => {
        if (this.state[key]) {
          link += `${key}=${this.state[key]}&`;
        }
      });
    }
    this.setState({ shareLink: link });
  }

  render() {
    const {
      eigenkapital,
      qm,
      makler,
      instandhaltung,
      nettomiete,
      wohngeld,
      bundesland,
      kaufpreis,
      zinsen,
      tilgungsrate,
    } = this.state;
    return (
      <div className="main-container">
        <div className="flex-container">
          <div className="input-var-container">
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onSubmit={this.handleFormSubmit}
            >
              <div className="input-field-divs">
                <div className="input-var-div">
                  <label className="label-text-input">Kaufpreis</label>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      type="number"
                      step="0.01"
                      name="kaufpreis"
                      placeholder="z.B. 400000"
                      value={kaufpreis}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">€</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <label
                    className="label-text-input"
                    style={{ width: "fit-content" }}
                  >
                    Wohnfläche
                  </label>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      type="number"
                      step="0.01"
                      name="qm"
                      placeholder="z.B. 80"
                      value={qm}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">qm</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <label className="label-text-input">
                    Monatliche Kaltmiete
                  </label>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      type="number"
                      step="0.01"
                      name="nettomiete"
                      placeholder="z.B. 800"
                      value={nettomiete}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">€</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">
                      Monatliches Wohngeld
                    </label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Das Wohngeld unterteilen wir pauschal in 70% umlagefähig
                        und 30% nicht-umlagefähig.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="wohngeld"
                      placeholder="z.B. 240"
                      value={wohngeld}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">€</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Sanierungskosten</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Falls unmittelbare Renovierungskosten anfallen (z.B.
                        neue Küche oder Bad). Falls nicht, 0 eintragen.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="instandhaltung"
                      placeholder="z.B. 10000"
                      value={instandhaltung}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">€</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Bundesland</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Das Bundesland beeinflusst die Höhe der
                        Grunderwerbssteuer.
                      </span>
                    </div>
                  </div>
                  <div className="select">
                    <select
                      name="bundesland"
                      id="bundesland"
                      onChange={this.handleSelectChange}
                      required
                      defaultValue={this.getDefaultValue()}
                    >
                      <option value="">Bitte Bundesland wählen</option>
                      <option value={"Baden Württemberg"}>
                        Baden Württemberg
                      </option>
                      <option value={"Bayern"}>Bayern</option>
                      <option value={"Berlin"}>Berlin</option>
                      <option value={"Brandenburg"}>Brandenburg</option>
                      <option value={"Bremen"}>Bremen</option>
                      <option value={"Hamburg"}>Hamburg</option>
                      <option value={"Hessen"}>Hessen</option>
                      <option value={"Mecklenburg-Vorpommern"}>
                        Mecklenburg-Vorpommern
                      </option>
                      <option value={"Niedersachsen"}>Niedersachsen</option>
                      <option value={"Nordrhein Westfalen"}>
                        Nordrhein Westfalen
                      </option>
                      <option value={"Rheinland-Pfalz"}>Rheinland-Pfalz</option>
                      <option value={"Saarland"}>Saarland</option>
                      <option value={"Sachsen"}>Sachsen</option>
                      <option value={"Sachsen-Anhalt"}>Sachsen-Anhalt</option>
                      <option value={"Schleswig-Holstein"}>
                        Schleswig-Holstein
                      </option>
                      <option value={"Thüringen"}>Thüringen</option>
                    </select>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Eigenkapital</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Die meisten Banken verlangen, dass zumindest die
                        Nebenkosten (ca. 10%) des Kaufpreises) mit Eigenkapital
                        finanziert werden. Oft wird geraten, 20% Eingenkapital
                        einzubringen.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="eigenkapital"
                      placeholder="z.B. 80000"
                      value={eigenkapital}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">€</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Zins</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        0,5 bis 1% Zinsen pro Jahr sind bei derzeitigem
                        Zinsniveau realistisch.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="zinsen"
                      placeholder="z.B. 1,2"
                      value={zinsen}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">%</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Jährliche Tilgung</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Die meisten Immobilienkäufer tilgen zwischen 2% und 3%
                        des Kaufpreises pro Jahr.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="tilgungsrate"
                      placeholder="z.B. 3"
                      value={tilgungsrate}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">%</p>
                  </div>
                </div>

                <div className="input-var-div">
                  <div className="info-icon-container-2">
                    <label className="bold-with-icon">Maklercourtage</label>
                    <div className="no-button-style">
                      <InfoIcon className="info-icon" />
                      <span className="info-span">
                        Nur den Anteil eingeben, der vom Käufer zu tragen ist.
                        Seit dem 23.12.2020 dürfen dem Käufer nämlich nicht mehr
                        alas 50% der anfallenden Courtage in Rechnung gestellt
                        werden. Falls kein Makler involviert ist, einfach 0
                        eintragen.
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <input
                      required
                      className="input"
                      step="0.01"
                      type="number"
                      name="makler"
                      placeholder="z.B. 1,8"
                      value={makler}
                      onChange={this.handleChange}
                    />
                    <p className="currency-input">%</p>
                  </div>
                </div>
              </div>
              <button className="calculate-button" type="submit" value="Login">
                Rendite berechnen
              </button>
            </form>
          </div>

          {this.state.calculatedData &&
          this.state.calculatedData.jährlicheNettoMieteRendite ? (
            <div>
              <h1 style={{ margin: "40px", marginTop: "80px" }}>
                Deine Berechnung
              </h1>

              <p className="p-text">
                Deine jährliche{" "}
                <span className="sum-span">
                  Nettomietrendite beträgt{" "}
                  {JSON.stringify(
                    this.state.calculatedData.jährlicheNettoMieteRendite
                  ).replace(".", ",") || "-"}
                  %
                </span>
                . D.h. du erhältst jedes Jahr diese Rendite auf die Summe aus
                Darlehensbetrag und Eigenkapital, sprich den Wert der Immobilie
                plus Nebenkosten. Am Aktienmarkt kannst du vermutlich
                langfristig eine höhere Rendite erzielen, allerdings erzielst du
                diese Rendite nur mit Eigenkapital und nicht auf Fremdkapital.
                Eine potentielle Wertsteigerung deiner Immobilie ist bei dieser
                Rendite nicht berücksichtigt. Die meisten Investoren versuchen
                auf einen Wert von 3% zu kommen. In sehr gefragten Städten wie
                München geben sich viele mit 2,0-2,5% zufrieden und spekulieren
                auf Wertsteigerung.
              </p>

              {/* <CopyToClipboard text={this.state.shareLink}>
                <button className="share-button">
                  <p style={{ marginRight: "5px" }}>
                    Klicke, um Link zu deiner Berechnung zu kopieren
                  </p>
                  <ShareIcon />
                </button>
              </CopyToClipboard> */}
              <div className="output">
                <Kaufpreis state={this.state}></Kaufpreis>
                <RenditeObjekt state={this.state}></RenditeObjekt>
                <Mieteinnahmen state={this.state}></Mieteinnahmen>
                {/* <Bank state={this.state}></Bank>
                <Ausblick state={this.state}></Ausblick> */}
                {/* <p className="output-container" style={{width: '35vw', marginTop: '80px'}} >Du kannst in der Eingabemaske deine Inputvariablen anpassen und die Berechnung erneut starten, um zu sehen wie sich der Output verändert.</p> */}
              </div>
              <p className="p-text" style={{ marginTop: "20px" }}>
                Du kannst in der Eingabemaske deine Inputvariablen anpassen und
                die Berechnung erneut starten, um zu sehen wie sich der Output
                verändert.
              </p>

              {/* NEW INPUT FIELD */}
              <CopyToClipboard text={this.state.shareLink}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "80vw",
                    textAlign: "start",
                  }}
                >
                  <p style={{ marginRight: "5px" }}>
                    Klicke, um Link zu deiner Berechnung zu kopieren
                  </p>
                  <FileCopyIcon
                    style={{ color: "#009282" }}
                    className="copy-button"
                  />
                </div>
              </CopyToClipboard>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Login;
