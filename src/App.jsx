import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//此处使用路由守卫
import FrontendAuth from "./router/FrontendAuth";
import { routerConfig } from "./router/router";
import Login from "./pages/Login";
import Index from "./pages/Admin";

export default class Root extends Component {
  render() {
    return (
      // 以哈希路径为router
      <>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Index} />

            {/* <FrontendAuth config={routerConfig} /> */}
          </Switch>
        </HashRouter>
      </>
    );
  }
}
