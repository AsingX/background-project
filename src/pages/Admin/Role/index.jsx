import React, { Component } from "react";

import UserList from "./components/roleList";

import CreateRole from "./components/createRole";

import SetUpRole from "./components/setUpRole";

import { getRoleAsync } from "../../../redux/actions/role";

import { connect } from "react-redux";

class Index extends Component {
  render() {
    return (
      <>
        <div style={{ borderBottom: "1px solid ", padding: "10px 0" }}>
          <CreateRole /> <SetUpRole />
        </div>
        <div style={{ padding: "20px 0" }}>
          <UserList></UserList>
        </div>
      </>
    );
  }
}

export default connect((state) => ({ role: state.role }), { getRoleAsync })(
  Index
);
