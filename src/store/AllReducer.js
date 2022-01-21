import { combineReducers } from "redux";
import { DashboardReducer } from "../redux/dashboard/DashboardReducer";
import { LoginReducer } from "../redux/login/LoginReducer";
export const allReducer = combineReducers({
  DashboardReducer,
  LoginReducer,
});
