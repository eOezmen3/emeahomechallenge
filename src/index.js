import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Header from "./components/header/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AlertProvider } from "react-alerts-plus";

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
