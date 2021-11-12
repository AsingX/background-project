import React, { Component } from "react";
import { Card, Progress, Row, Col } from "antd";

import Table from "./components/table";

class index extends Component {
  render() {
    return (
      <div>
        <Row align="middle " justify="center">
          <Col>
            {" "}
            <Card title="访问量" style={{ height: "250px", width: "300px" }}>
              <h1 style={{ fontSize: "40px" }}>9527</h1>
              <img src="/img/tongjitu.jpg" alt="" />
            </Card>
          </Col>
          <Col>
            <Card title="处理次数" style={{ height: "250px", width: 300 }}>
              <h1 style={{ fontSize: "40px" }}>97414</h1>
              <img src="/img/tongjitu2.jpg" alt="" />
            </Card>
          </Col>
          <Col>
            <Card title="今日访问" style={{ height: "250px", width: 300 }}>
              <h1 style={{ fontSize: "40px" }}>7</h1>
              <span>占全部</span>
              <Progress percent={0.13} />
            </Card>
          </Col>
          <Col>
            <Card title="今日处理" style={{ height: "250px", width: 300 }}>
              <h1 style={{ fontSize: "40px" }}>70</h1>
              <span>占全部</span>
              <Progress percent={0.17} />
            </Card>
          </Col>
        </Row>

        <h3 style={{ margin: "8px" }}>访问记录</h3>
        <Table></Table>
      </div>
    );
  }
}

export default index;
