import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  
  let total = 0;
  
  const [items, setItems] = useState([]);
  const [itemID, setItemID] = useState([]);

  fetch("http://demo0410178.mockable.io/shop")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  function handleChange(id) {
    setItemID(prevItems => {
      return [...prevItems, id];
    });
    //arr[count] = id;
    //count = count + 1;
    //total = total + parseInt(items[id-1].price);
  }
  

  return (
    <>
      <Router>
        <Header />
         
        <Switch>

        <Route exact path="/">
            <Home items= {items} addToCart = {handleChange} />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

        
          <Route exact path="/cart">
            <Cart items= {items} ID= {itemID} amount={total}/>
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
