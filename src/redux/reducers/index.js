import login from "./login";
import goods from "./goods";
import updateStatus from "./updateStatus";

import { combineReducers } from "redux";

export default combineReducers({
  login,
  goods,
  updateStatus,
});
