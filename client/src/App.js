import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import RenditeCalc from "./components/rendite";
import immoLogo from "./immoLogo.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{height: '400px', margin: '50px'}}>
          <img style={{height: '400px'}} src={immoLogo}></img>
        </header>
        <div>
          <h1 style={{fontSize: '40px', width: '80vw', textAlign: 'start', margin: 'auto'}}>
          Rendite für Immobilie zur Vermietung berechnen
          </h1>
          <p style={{fontSize: '30px', width: '80vw', textAlign: 'justify', margin: '30px auto', lineHeight: "40px"}}>
          Befülle einfach die untenstehenden Felder für deine Immobilie und berechne mit einem Klick deine Rendite sowie weitere Kennzahlen (Cashflow, Kaufnebenkosten, monatliche Belastung etc.). Derzeit funktioniert der Rechner nur für Immobilien in Deutschland.
          </p>
        </div>
        <Switch>
          <RenditeCalc exact path="/rendite" component={RenditeCalc} />
        </Switch>
      </div>
    );
  }
}

export default App;
