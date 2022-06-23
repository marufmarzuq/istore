import { combineReducers } from "redux";
import cart from "./cartReducers";
import auth from "./authReducer";

export default combineReducers({ cart, auth });
