import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
  addedItems: cartReducer,
  allItems: productReducer,
});

export default reducers;
