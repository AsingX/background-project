import React, { Component } from "react";
import { Modal, Button } from "antd";

import { postAxios } from "../../../../utils/axios";

import { connect } from "react-redux";
import { getUserAsync } from "../../../../redux/actions/user";

class DeleteUser extends Component {
  state = { isModalVisible: false };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
    const usetID = { userId: this.props.userList._id };
    postAxios("/manage/user/delete", "/api1", usetID, (data) => {
      this.props.getUserAsync();
    });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    return (
      <>
        <Button type="text" onClick={this.showModal}>
          删除
        </Button>
        <Modal
          title="删除用户"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="取消"
        >
          <p>是否删除用户?</p>
        </Modal>
      </>
    );
  }
}

export default connect((state) => ({ user: state.user }), { getUserAsync })(
  DeleteUser
);
