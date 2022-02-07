import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Cart from "./Cart";
import Footer from "./Footer";



function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  actions.fetchData("https://61f259992219930017f504bf.mockapi.io/emall/items");

  return (
    <>
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
