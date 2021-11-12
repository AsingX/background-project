import loadable from "@loadable/component";
import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { FrontendAuth } from "./FrontendAuth";
import { routerConfig } from "./router";

//引入点击事件

//路由的懒加载
const Home = loadable(() => import("../pages/Home/index.jsx"));
const Login = loadable(() => import("../pages/Login"));

export default class Root extends Component {
  render() {
    return (
      // 以哈希路径为router
      <>
        <HashRouter>
          <Switch>
            <FrontendAuth config={routerConfig} />
            {/* <Route path="/login" component={Login} />
            <Route path="/home" component={Home} /> */}

            {/* <Redirect to="/login"></Redirect> */}
          </Switch>
        </HashRouter>
      </>
    );
  }
}
