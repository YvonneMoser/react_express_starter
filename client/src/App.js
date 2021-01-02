import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import RenditeCalc from "./components/rendite";
import immoLogo from "./immoLogo.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { animateScroll as scroll } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{ height: "200px", margin: "20px" }}>
          <img style={{ height: "200px" }} src={immoLogo} alt="logo"></img>
        </header>
        <div>
          <h1
            style={{
              fontSize: "20px",
              width: "80vw",
              textAlign: "start",
              margin: "auto",
            }}
          >
            Rendite für Immobilie zur Vermietung berechnen
          </h1>
          <p
            style={{
              fontSize: "15px",
              width: "80vw",
              textAlign: "justify",
              margin: "15px auto",
              lineHeight: "20px",
            }}
          >
            Befülle einfach die untenstehenden Felder für deine Immobilie und
            berechne mit einem Klick deine Rendite sowie weitere Kennzahlen
            (Cashflow, Kaufnebenkosten, monatliche Belastung etc.). Derzeit
            funktioniert der Rechner nur für Immobilien in Deutschland.
          </p>
        </div>
        <Switch>
          <RenditeCalc component={RenditeCalc} />
        </Switch>
        <div style={{ marginBottom: "20px", marginTop: "50px" }}>
          <img style={{ height: "50px" }} src={immoLogo} alt="logo"></img>
          <p className="impressum">{"Made with <3 in Munich"}</p>
          <p className="impressum">Feedback?</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              verticalAlign: "center",
              alignItems: "center",
            }}
          >
            <p className="impressum">leonbszeli(at)gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => {
            scroll.scrollToTop();
          }}
          className="arrow-button"
        >
          <ArrowUpwardIcon style={{ color: "#009282", alignSelf: "center" }} />
        </button>
      </div>
    );
  }
}

export default App;
