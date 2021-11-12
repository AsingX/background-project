import React, { Component } from "react";
import { Table } from "antd";

import { connect } from "react-redux";
import { getUserAsync } from "../../../../redux/actions/user";

import ReviseUser from "./reviseUser";

import DeleteUser from "./deleteUser";
class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "用户名",
          dataIndex: "username",
          key: "username",
        },
        {
          title: "邮箱",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "电话",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "注册时间",
          key: "create_time",
          dataIndex: "create_time",
        },
        {
          title: "所属角色",
          key: "role_name",
          dataIndex: "role_name",
        },
        {
          title: "操作",
          key: "operate",
          render: (text) => (
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <ReviseUser userList={text} />
              <DeleteUser userList={text} />
            </div>
          ),
        },
      ],
      data: [],
    };
  }

  componentDidMount() {
    this.props.getUserAsync(() => {
      this.setState({ data: this.props.user });
    });
  }

  render() {
    return (
      <>
        <Table
          columns={this.state.columns}
          dataSource={this.props.user.users}
        />
      </>
    );
  }
}

export default connect((state) => ({ user: state.user }), { getUserAsync })(
  table
);
