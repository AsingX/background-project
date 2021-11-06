import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";
//中间件
import thunk from "redux-thunk";

//在redux拿出createStore并默认暴露，添加applyMiddleware(如果传入函数帮忙调用)
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
