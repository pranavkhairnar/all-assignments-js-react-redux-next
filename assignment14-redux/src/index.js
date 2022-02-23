import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./state/store";


import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

//actions.fetchData("");
// const dispatch = useDispatch();
// const actions = bindActionCreators(actionCreators, dispatch);
fetch("https://61f259992219930017f504bf.mockapi.io/emall/items")
.then((res) =>
  res.json())
.then((json) => {
  //actions.fetchData(json);
     console.log(json);
    store.dispatch({type:"fetch",payload:json});
})

// export const fetchData = (json_data) => {
//   return (dispatch) => {
//     dispatch({
//       type: "fetch",
//       payload: json_data,
//     });
//   };
// };

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// npm install react-router-dom
// npm install react-router-dom@5
