import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
});
