import login from "./login";

import user from "./user";

import role from "./role";
import goods from "./goods";
import updateStatus from "./updateStatus";
import category from "./category";
import addCategory from "./addCategory";
import categoryChildren from "./categoryChildren";
import updateCategory from "./updateCategory";


import { combineReducers } from "redux";

export default combineReducers({
  login,
  user,
  role,
  goods,
  updateStatus,
  category,
  addCategory,
  categoryChildren,
  updateCategory
});

