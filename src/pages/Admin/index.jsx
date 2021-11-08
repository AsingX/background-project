import React, { Component } from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import "./index.css";

import { Layout, Menu, Avatar, Col, Row, Button } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Home = loadable(() => import("./Home"));
const User = loadable(() => import("./User"));
const Category = loadable(() => import("./Category"));
const Product = loadable(() => import("./Product"));

const { Header, Content, Footer, Sider } = Layout;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }
  componentDidMount() {
    setInterval(() => {
      let date = new Date().toLocaleString();
      this.setState({ date: date });
    }, 1000);
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Row
            align="middle"
            justify="space-around"
            className="logo"
            style={{ height: "90px" }}
          >
            <Col>
              <Avatar
                size={64}
                icon={
                  <img src="https://img1.baidu.com/it/u=3374147519,3268144078&fm=26&fmt=auto" />
                }
              />
            </Col>
            <Col>
              <h1 style={{ color: "white", fontSize: "24px", height: "24px" }}>
                后台管理
              </h1>
            </Col>
          </Row>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-background"
            style={{ padding: 0, lineHeight: "normal", height: "100px" }}
          >
            <Row gutter="10" align="middle" justify="end">
              <Col>
                <span>欢迎,aaa</span>
              </Col>
              <Col>
                <Button type="link"> 退出</Button>
              </Col>
            </Row>
            <hr style={{ background: "#58dc58", color: "#58dc58" }} />
            <Row
              style={{ height: "50px" }}
              align="middle"
              justify="space-around"
            >
              <Col style={{ width: "150px" }} pull="3">
                <span>当前路由,先这样写</span>
              </Col>
              <Col style={{ width: "150px" }} push="3">
                <span>{this.state.date}</span>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24 }}
            >
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/category" component={Category} />
                <Route path="/product" component={Product} />
              </Switch>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
