import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// Combines multiple reducers to pass into the store
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
