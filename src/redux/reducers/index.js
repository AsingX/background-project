import login from "./login";

import user from "./user";

import role from "./role";

import { combineReducers } from "redux";

export default combineReducers({
  login,
  user,
  role,
});
