import React, { Component } from "react";
import "./../css/Login.css";
import { calculateReturnOnInvest } from '../helpers/calculator'
import Kaufpreis from "./kaufnebenkosten";
import Mieteinnahmen from "./mietverhältnis";
import RenditeObjekt from "./finanzierungUndRendite";
import InfoIcon from "@material-ui/icons/Info";
import {  animateScroll as scroll} from 'react-scroll'


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
    scroll.scrollMore(800);
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
          <div class="input-var-container">
            <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}} onSubmit={this.handleFormSubmit}>
              <div className="input-field-divs">

              <div className="input-var-div">
                <label className="label-text-input">Kaufpreis</label>
                <input
                  required  
                  className="input"
                  type="number"
                  name="kaufpreis"
                  placeholder="Kaufpreis"
                  value={kaufpreis}
                  onChange={this.handleChange}
                />
              </div>
              

              <div  className="input-var-div">
                <label className="label-text-input" style={{width: 'fit-content'}}>Wohnfläche</label>
                <input
                  required  
                  className="input"
                  type="number"
                  name="qm"
                  placeholder="Quadratmeter"
                  value={qm}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="input-var-div">
                <label className="label-text-input">Monatliche Kaltmiete</label>
                <input
                  required  
                  className="input"
                  type="number"
                  name="nettomiete"
                  placeholder="Nettomiete"
                  value={nettomiete}
                  onChange={this.handleChange}
                />
              </div>
                     
              <div className="input-var-div">
                <label className="label-text-input">Monatliches Wohngeld</label>
                <input
                  required  
                  className="input"
                  type="number"
                  name="wohngeld"
                  placeholder="Wohngeld"
                  value={wohngeld}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Sanierungskosten</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">Falls einmalige Renovierungskosten fällig sind (z.B. neue Küche oder Bad). Falls nicht, 0 eintragen.</span>
                  </div>
                </div> 
                <input
                  required  
                  className="input"
                  type="number"
                  name="instandhaltung"
                  placeholder="Instandhaltung"
                  value={instandhaltung}
                  onChange={this.handleChange}
                />
              </div>
            
              
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Bundesland</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">Das Bundesland beeinflusst die Grunderwerbssteuer.</span>
                  </div>
                </div> 
                <input
                  required  
                  className="input"
                  type="number"
                  name="grunderwerbssteuer"
                  placeholder="Grunderwerbssteuer"
                  value={grunderwerbssteuer}
                  onChange={this.handleChange}
                />
              </div>
              
          
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Eigenkapital</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">Die meisten Banken verlangen, dass zumindest die Nebenkosten (ca. 10%) des Kaufpreises) mit Eigenkapital finanziert werden. Oft wird geraten, 20% Eingenkapital einzubringen.</span>
                  </div>
                </div> 
                <input
                  required  
                  className="input"
                  type="number"
                  name="eigenkapital"
                  placeholder="Eigenkapital"
                  value={eigenkapital}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Zins</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">0,5 bis 1% Zinsen sind bei derzeitigem Zinsniveau realistisch.</span>
                  </div>
                </div>                 
                <input
                  required
                  className="input"
                  type="number"
                  name="zinsen"
                  placeholder="Zinsen"
                  value={zinsen}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Jährliche Tilgung</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">Die meisten Tilgen zwischen 2% und 3% des Kaufpreises pro Jahr.</span>
                  </div>
                </div> 
                <input
                  required
                  className="input"
                  type="number"
                  name="tilgungsrate"
                  placeholder="Tilgungsrate"
                  value={tilgungsrate}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="input-var-div">
                <div class="info-icon-container-2">
                  <label className="bold-with-icon">Maklercourtage</label>
                  <div className="no-button-style">
                    <InfoIcon fontSize="medium" className="info-icon" />
                    <span className="info-span">Nur den Anteil, de der Käufer trägt (5Falls kein Makler im Spiel ist, einfach 0 eintragen.</span>
                  </div>
                </div> 
                <input
                  required  
                  className="input"
                  type="number"
                  name="makler"
                  placeholder="Makler"
                  value={makler}
                  onChange={this.handleChange}
                />
              </div>

              </div>
              <button className="calculate-button" type="submit" value="Login">
                Rendite berechnen
              </button>
            </form>
          </div>

         {this.state.calculatedData &&
                this.state.calculatedData.jährlicheNettoMieteRendite ? 
                <div>
                <h1 style={{margin: '40px', marginTop: '80px'}}>Ausgabe</h1>
                <p className="p-text">Deine jährliche <span className="sum-span">Nettomietrendite beträgt {'this.state.calculatedData.jährlicheNettoMieteRendite'}</span>. 
                D.h. du erhältst jedes Jahr diese Rendite auf die Summe aus Darlehensbetrag und Eigenkapital, sprich den Wert der Immobilie plus Nebenkosten. Am Aktienmarkt kannst du vermutlich langfristig eine höhere Rendite erzielen, allerdings erzielst du diese Rendite nur mit Eigenkapital und nicht auf Fremdkapital. Eine potentielle Wertsteigerung deiner Immobilie ist bei dieser Rendite nicht berücksichtigt.
                Die meisten Investoren versuchen auf einen Wert von 3% zu kommen. In sehr gefragten Städten wie München geben sich viele mit 2,0-2,5% zufrieden und spekulieren auf Wertsteigerung.
                </p>
                <p className="p-text">Du kannst in der Eingabemaske deine Inputvariablen anpassen und die Berechnung erneut starten, um zu sehen wie sich der Output verändert.</p>
      
                {/* NEW INPUT FIELD */}
                <div className="output">
                <Kaufpreis state={this.state}></Kaufpreis>
                <RenditeObjekt state={this.state}></RenditeObjekt>
                <Mieteinnahmen state={this.state}></Mieteinnahmen>
                {/* <Bank state={this.state}></Bank>
                <Ausblick state={this.state}></Ausblick> */}
                {/* <p className="output-container" style={{width: '35vw', marginTop: '80px'}} >Du kannst in der Eingabemaske deine Inputvariablen anpassen und die Berechnung erneut starten, um zu sehen wie sich der Output verändert.</p> */}
                </div></div> 
                : null 
              
               } 
          
          
        </div>
      </div>
    );
  }
}

export default Login;
