import login from "./login";
import goods from "./goods";
import updateStatus from "./updateStatus";
import category from "./category";
import addCategory from "./addCategory";
import categoryChildren from "./categoryChildren";
import updateCategory from "./updateCategory";


import { combineReducers } from "redux";

export default combineReducers({
  login,
  goods,
  updateStatus,
  category,
  addCategory,
  categoryChildren,
  updateCategory
});

