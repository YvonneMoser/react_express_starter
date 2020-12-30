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
      <div className="body-blue">
        <div className="flex-container">
          <div class="input-container">
            <h4 class="title">Input Variablen</h4>
            <form onSubmit={this.handleFormSubmit}>
              <div className="inputLogin">
                <div class="info-icon-container">
                  <label className="labelWithIcon">Quadratmeter</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="small" className="info-icon" />
                    <span>Hello</span>
                  </div>
                </div>
                <input
                  className="input-login"
                  type="number"
                  name="qm"
                  placeholder="Quadratmeter"
                  value={qm}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Makler</label>
                <input
                  className="input-login"
                  type="number"
                  name="makler"
                  placeholder="Makler"
                  value={makler}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Instandhaltung</label>
                <input
                  className="input-login"
                  type="number"
                  name="instandhaltung"
                  placeholder="Instandhaltung"
                  value={instandhaltung}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Nettomiete</label>
                <input
                  className="input-login"
                  type="number"
                  name="nettomiete"
                  placeholder="Nettomiete"
                  value={nettomiete}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Wohngeld</label>
                <input
                  className="input-login"
                  type="number"
                  name="wohngeld"
                  placeholder="Wohngeld"
                  value={wohngeld}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Grunderwerbssteuer</label>
                <input
                  className="input-login"
                  type="number"
                  name="grunderwerbssteuer"
                  placeholder="Grunderwerbssteuer"
                  value={grunderwerbssteuer}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Kaufpreis</label>
                <input
                  className="input-login"
                  type="number"
                  name="kaufpreis"
                  placeholder="Kaufpreis"
                  value={kaufpreis}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Eigenkapital</label>
                <input
                  className="input-login"
                  type="number"
                  name="eigenkapital"
                  placeholder="Eigenkapital"
                  value={eigenkapital}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Zinsen</label>
                <input
                  className="input-login"
                  type="number"
                  name="zinsen"
                  placeholder="Zinsen"
                  value={zinsen}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div className="inputLogin">
                <label className="labelIcon">Tilgungsrate</label>
                <input
                  className="input-login"
                  type="number"
                  name="tilgungsrate"
                  placeholder="Tilgungsrate"
                  value={tilgungsrate}
                  onChange={this.handleChange}
                />
              </div>
              <button className="button-login" type="submit" value="Login">
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
