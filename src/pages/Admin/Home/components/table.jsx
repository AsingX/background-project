import React, { Component } from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "ip地址",
    dataIndex: "ip",
    key: "ip",
  },
  {
    title: "请求地址",
    dataIndex: "request",
    key: "request",
  },
  {
    title: "请求时间",
    key: "time",
    dataIndex: "time",
  },
  {
    title: "http状态码",
    key: "state",
    dataIndex: "state",
  },
];
const data = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    index: i + 1,
    request: "/login",
    ip: "113.***.****.***",
    time: "2021-04-24 22:52:41",
    state: 200,
  });
}

export default class table extends Component {
  render() {
    return (
      <>
        <Table columns={columns} dataSource={data} />
      </>
    );
  }
}
