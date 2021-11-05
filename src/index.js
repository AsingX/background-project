import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";

import "sass";

import Root from "./router/index";

//用于调取store,使用Provider将其传递给所有的组件
import store from "./redux/store";

//将store传递给所有子组件(或者说使用store的组件)
import { Provider } from "react-redux";

ReactDOM.render(
  // 使用时将Provider包裹app组件
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
