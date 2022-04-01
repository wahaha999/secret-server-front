import { combineReducers } from "redux";
import { reducer as secrets } from "./secret";

const reducers = {
  secrets,
};

export const appReducer = combineReducers(reducers);
