import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/Login.css";
import calculator from "../lib/calculator-service";
import { calculateReturnOnInvest } from '../helpers/calculator'
import Kaufpreis from "./kaufpreis";
import Mieteinnahmen from "./mieteinnahmen";
import Ausblick from "./ausblick";
import RenditeObjekt from "./renditeObjekt";
import Bank from "./bank";
import InfoIcon from "@material-ui/icons/Info";

class Login extends Component {
  state = {
    qm: "",
    makler: "",
    instandhaltung: "",
    nettomiete: "",
    wohngeld: "",
    grunderwerbssteuer: "",
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
      grunderwerbssteuer,
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
      grunderwerbssteuer,
      kaufpreis,
      eigenkapital,
      zinsen,
      tilgungsrate,
    })
    this.setState({ calculatedData: sum });
    console.log("sttatttt", this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      eigenkapital,
      qm,
      makler,
      instandhaltung,
      nettomiete,
      wohngeld,
      grunderwerbssteuer,
      kaufpreis,
      zinsen,
      tilgungsrate,
    } = this.state;
    return (
      <div className="main-container">
        <div className="flex-container">
          <div class="input-container">
            <h4 class="title">Input Variablen</h4>
            <form onSubmit={this.handleFormSubmit}>
              <div className="input-container">
                <div class="info-icon-container">
                  <label className="input-label-with-info">Quadratmeter</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="small" className="info-icon" />
                    <span>Hello</span>
                  </div>
                </div>
                <input
                  className="input-field"
                  type="number"
                  name="qm"
                  placeholder="Quadratmeter"
                  value={qm}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Makler</label>
                <input
                  className="input-field"
                  type="number"
                  name="makler"
                  placeholder="Makler"
                  value={makler}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Instandhaltung</label>
                <input
                  className="input-field"
                  type="number"
                  name="instandhaltung"
                  placeholder="Instandhaltung"
                  value={instandhaltung}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Nettomiete</label>
                <input
                  className="input-field"
                  type="number"
                  name="nettomiete"
                  placeholder="Nettomiete"
                  value={nettomiete}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Wohngeld</label>
                <input
                  className="input-field"
                  type="number"
                  name="wohngeld"
                  placeholder="Wohngeld"
                  value={wohngeld}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Grunderwerbssteuer</label>
                <input
                  className="input-field"
                  type="number"
                  name="grunderwerbssteuer"
                  placeholder="Grunderwerbssteuer"
                  value={grunderwerbssteuer}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Kaufpreis</label>
                <input
                  className="input-field"
                  type="number"
                  name="kaufpreis"
                  placeholder="Kaufpreis"
                  value={kaufpreis}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Eigenkapital</label>
                <input
                  className="input-field"
                  type="number"
                  name="eigenkapital"
                  placeholder="Eigenkapital"
                  value={eigenkapital}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Zinsen</label>
                <input
                  className="input-field"
                  type="number"
                  name="zinsen"
                  placeholder="Zinsen"
                  value={zinsen}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Tilgungsrate</label>
                <input
                  className="input-field"
                  type="number"
                  name="tilgungsrate"
                  placeholder="Tilgungsrate"
                  value={tilgungsrate}
                  onChange={this.handleChange}
                />
              </div>
              <button className="calculate-button" type="submit" value="Login">
                Rendite berechnen
              </button>
            </form>
          </div>

          {/* NEW INPUT FIELD */}
          <Kaufpreis state={this.state}></Kaufpreis>
          <Mieteinnahmen state={this.state}></Mieteinnahmen>
          <Bank state={this.state}></Bank>
          <RenditeObjekt state={this.state}></RenditeObjekt>
          <Ausblick state={this.state}></Ausblick>
        </div>
      </div>
    );
  }
}

export default Login;
