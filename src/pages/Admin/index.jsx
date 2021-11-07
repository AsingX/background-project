import React, { Component } from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import { withRouter } from 'react-router-dom'

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

const Home = loadable(() => import("./Home"));
const User = loadable(() => import("./User"));
const Category = loadable(() => import("./Category"));
const Product = loadable(() => import("./Product"));
const Role = loadable(() => import("./Role"));

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component {

  onPath = (url) => {
    this.props.history.push(url);
  }

  state = {
    collapsed: false,
  };

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
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
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

          <div style={{ width: 256 }}>

            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >

              <Menu.Item key="1" icon={<HomeOutlined />} onClick={this.onPath.bind(this, '/home')}>
                首页
              </Menu.Item>
              <SubMenu key="sub6" icon={<AreaChartOutlined />} title="商品">
                <Menu.Item icon={<BarsOutlined />} key="61" onClick={this.onPath.bind(this, '/category')} >品类管理</Menu.Item>
                <Menu.Item icon={<ToolOutlined />} key="62" onClick={this.onPath.bind(this, '/product')} >商品管理</Menu.Item>
              </SubMenu>
              <Menu.Item key="3" icon={<UserOutlined />} onClick={this.onPath.bind(this, '/user')} >
                用户管理
              </Menu.Item>

              <Menu.Item key="4" icon={<SafetyOutlined />} onClick={this.onPath.bind(this, '/role')}>
                角色管理
              </Menu.Item>
              <SubMenu key="sub5" icon={<AreaChartOutlined />} title="图表图形">
                <Menu.Item icon={<BarChartOutlined />} key="51">柱形图</Menu.Item>
                <Menu.Item icon={<LineChartOutlined />} key="52">折线图</Menu.Item>
                <Menu.Item icon={<PieChartOutlined />} key="53">饼图</Menu.Item>
              </SubMenu>
            </Menu>
          </div>

        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0, lineHeight: "normal" }}>
            <Row align="middle" justify="end" >
              <Col>
                <span>欢迎,aaa</span>
              </Col>
              <Col>
                <Button type="link"> 退出</Button>
              </Col>
            </Row>
            <Row align="middle" justify="end" >
              <Col>
                <span>欢迎,aaa</span>
              </Col>
              <Col>
                <Button type="link"> 退出</Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
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
  }
}

export default withRouter(Admin)
