import loadable from "@loadable/component";
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//路由的懒加载
const Admin = loadable(() => import("./pages/Admin"));
const Login = loadable(() => import("./pages/Login"));

export default class Root extends Component {
    render() {
        return (
            // 以哈希路径为router
            <>
                <HashRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" component={Admin} />
                    </Switch>
                </HashRouter>
            </>
        );
    }
}