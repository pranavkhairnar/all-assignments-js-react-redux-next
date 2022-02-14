import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PostCard from "./PostCard";

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
          <br></br>
            <Grid container>
              {/*
              <Grid
                item
                xs={12}
                style={{ height: '25vh', display: 'grid', placeItems: 'center' }}
              >
                
					<Typography variant='h3'>Insta Carousel</Typography>
				
              </Grid>
            */}
            
              <Grid item container xs={12} justifyContent="center">
                <Grid item xs={3}>
                  <PostCard />{" "}
                </Grid>
              </Grid>
            </Grid>
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
