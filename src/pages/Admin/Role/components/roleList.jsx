import React, { Component } from "react";
import { Table } from "antd";

import { connect } from "react-redux";
import { getRoleAsync } from "../../../../redux/actions/role";

class RoleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "角色名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "创建时间",
          dataIndex: "create_time",
          key: "create_time",
        },
        {
          title: "授权时间",
          dataIndex: "auth_time",
          key: "auth_time",
          render: (text) => {
            return <span> {!text ? "" : new Date(text).toLocaleString()}</span>;
          },
        },
        {
          title: "授权人",
          key: "auth_name",
          dataIndex: "auth_name",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.getRoleAsync(() => {
      // this.setState({ data: this.props.user });
    });
  }

  render() {
    console.log(this.props.role);
    return (
      <>
        <Table
          rowSelection={{ type: "radio" }}
          columns={this.state.columns}
          dataSource={this.props.role}
        />
      </>
    );
  }
}

export default connect((state) => ({ role: state.role }), { getRoleAsync })(
  RoleList
);
