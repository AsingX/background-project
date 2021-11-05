import loadable from "@loadable/component";
import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
//引入点击事件

//路由的懒加载
const Home = loadable(() => import("../pages/Home"));
const Login = loadable(() => import("../pages/Login"));

export default class Root extends Component {
  render() {
    return (
      // 以哈希路径为router
      <>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Redirect from="/*" to="/login"></Redirect>
          </Switch>
        </HashRouter>
      </>
    );
  }
}
