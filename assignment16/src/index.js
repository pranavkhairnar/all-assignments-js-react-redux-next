import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// npm install react-router-dom
// npm install react-router-dom@5
// npm i redux react-redux redux-thunk  

// npm install @material-ui/core
// npm install @material-ui/icons

// npm install swiper
// npm install swiper@6.8.4