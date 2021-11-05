import loadable from "@loadable/component";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//路由的懒加载
const Home = loadable(() => import("../pages/Home"));
const Login = loadable(() => import("../pages/Login"));
// const notices = loadable(() => import("../pages/Index/notices/notices"));

export default class Root extends Component {
  render() {
    return (
      // 以哈希路径为router
      <Switch>
        <Route path="/index"  component={Login}  />
        <Route path="/index/products"  component={Home}  />
        <Redirect to="/index/dashboard" />
      </Switch>
    );
  }
}
