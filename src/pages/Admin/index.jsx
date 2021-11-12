import React, { Component, useState } from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import { withRouter } from "react-router-dom";

import recursionMenu from "../../utils/menuData";
import { getCookie } from "../../utils/cookies";

import { Layout, Menu, Avatar, Col, Row, Button } from "antd";

import {
  UserOutlined,
  HomeOutlined,
  ToolOutlined,
  SafetyOutlined,
  AreaChartOutlined,
  BarsOutlined,
  BarChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Home = loadable(() => import("./Home"));
const User = loadable(() => import("./User"));
const Category = loadable(() => import("./Category"));
const Product = loadable(() => import("./Product"));
const Role = loadable(() => import("./Role"));

const { Header, Content, Footer, Sider } = Layout;

//当前时间
function RealTime() {
  const [time, setTime] = useState(0);

  setInterval(() => {
    let date = new Date().toLocaleString();
    setTime(date);
  }, 1000);

  return <span>{time}</span>;
}

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      collapsed: false,
      treeData: [],
    };
  }
  onPath = (url) => {
    this.props.history.push(url);
    console.log("b");
  };

  renderMenuItem = (children) => {
    const menuItem = children.map((item, index) => {
      return (
        <Menu.Item
          icon={item.icon}
          key={item.title + index}
          onClick={this.onPath.bind(this, item.path)}
        >
          {item.title}
        </Menu.Item>
      );
    });
    return menuItem;
  };
  componentDidMount() {
    let data = [
      {
        title: "首页",
        icon: <HomeOutlined />,
        path: "/home",
        children: [],
      },
      {
        title: "商品",
        icon: <AreaChartOutlined />,
        path: "/products",
        children: [
          {
            title: "品类管理",
            icon: <BarsOutlined />,
            path: "/category",
            children: [],
          },
          {
            title: "商品管理",
            icon: <ToolOutlined />,
            path: "/product",
            children: [],
          },
        ],
      },
      {
        title: "用户管理",
        icon: <UserOutlined />,
        path: "/user",
        children: [],
      },
      {
        title: "角色管理",
        icon: <SafetyOutlined />,
        path: "/role",
        children: [],
      },
      {
        title: "图形图表",
        icon: <HomeOutlined />,
        path: "/charts",
        children: [
          {
            title: "柱形图",
            icon: <BarChartOutlined />,
            path: "/charts/bar",
            children: [],
          },
          {
            title: "折线图",
            icon: <LineChartOutlined />,
            path: "/charts/line",
            children: [],
          },
          {
            title: "饼图",
            icon: <PieChartOutlined />,
            path: "/charts/order",
            children: [],
          },
        ],
      },
    ];
    const jurisdiction = JSON.parse(getCookie("__config_center_token")).role
      .menus;

    this.setState({ treeData: recursionMenu(jurisdiction, data) });
    console.log(jurisdiction);
  }

  render() {
    if (getCookie("__config_center_token")) {
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
                    <img
                      src="https://img1.baidu.com/it/u=3374147519,3268144078&fm=26&fmt=auto"
                      alt=""
                    />
                  }
                />
              </Col>
              <Col>
                <h1
                  style={{ color: "white", fontSize: "24px", height: "24px" }}
                >
                  后台管理
                </h1>
              </Col>
            </Row>

            <div style={{ width: 256 }}>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
              >
                {this.state.treeData.map((item, index) => {
                  if (item.children && item.children.length) {
                    return (
                      <SubMenu
                        key={item.title + index}
                        title={item.title}
                        icon={item.icon}
                      >
                        {this.renderMenuItem(item.children)}
                      </SubMenu>
                    );
                  }
                  return (
                    <Menu.Item
                      key={item.title + index}
                      icon={item.icon}
                      onClick={this.onPath.bind(this, item.path)}
                    >
                      {item.title}
                    </Menu.Item>
                  );
                })}
              </Menu>
            </div>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header
              className="site-layout-background"
              style={{ padding: 0, lineHeight: "normal", height: "100px" }}
            >
              <Row align="middle" justify="end">
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
                  <RealTime />
                </Col>
              </Row>
            </Header>
            <Content
              style={{
                margin: "24px 16px 0",
                overflow: "initial",
                minHeight: "500px",
              }}
            >
              <div
                className="site-layout-background"
                style={{ padding: 10, height: "100%" }}
              >
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/user" component={User} />
                  <Route path="/category" component={Category} />
                  <Route path="/product" component={Product} />
                  <Route path="/role" component={Role} />
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    } else {
      this.props.history.push("/login");
      return "";
    }
  }
}

export default withRouter(index);
