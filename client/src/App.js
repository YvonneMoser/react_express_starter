import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import RenditeCalc from "./components/rendite";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rendite Rechner</h1>
        </header>
        <Switch>
          <RenditeCalc exact path="/rendite" component={RenditeCalc} />
        </Switch>
      </div>
    );
  }
}

export default App;
