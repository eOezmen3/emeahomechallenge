import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AlertProvider } from "react-alerts-plus";

import App from "./App.js";
import Header from "./components/header/Header";
import BookDetail from "./components/book/BookDetail";
import Cart from "./components/cart/Cart";

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/bookdetail" component={BookDetail} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
