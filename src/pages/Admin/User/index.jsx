import React, { Component } from "react";

import UserList from "./components/userList";

import CreateUser from "./components/createUser";

import { getUserAsync } from "../../../redux/actions/user";

import { connect } from "react-redux";

class Index extends Component {


  render() {
    return (
      <>
        <div style={{ borderBottom: "1px solid ", padding: "10px 0" }}>
          <CreateUser></CreateUser>
        </div>
        <div style={{ padding: "20px 0" }}>
          <UserList></UserList>
        </div>
      </>
    );
  }
}

export default connect((state) => ({ user: state.user }), { getUserAsync })(
  Index
);
