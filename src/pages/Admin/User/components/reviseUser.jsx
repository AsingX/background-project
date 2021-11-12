import React, { Component } from "react";

import { Button, Modal, Input, Form, Select } from "antd";

import { postAxios } from "../../../../utils/axios";

import { connect } from "react-redux";
import { getUserAsync } from "../../../../redux/actions/user";

const { Option } = Select;

class ReviseUser extends Component {
  state = { isModalVisible: false };

  //显示创建用户框
  showModal = () => {
    this.setState({ isModalVisible: true });
  };
  //点击确认按钮
  handleOk = () => {
    this.setState({ isModalVisible: false });
    this.refs.form.submit();
  };
  //点击关闭按钮
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  //表单提交成功
  onFinish = (values) => {
    postAxios("/manage/user/update", "/api1", values, (data) => {
      this.props.getUserAsync();
    });
  };


  render() {
    return (
      <>
        <Button type="text" onClick={this.showModal}>
          修改
        </Button>
        <Modal
          title="修改用户"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确定"
          cancelText="取消"
          destroyOnClose="ture"
        >
          <Form
            labelAlign="left"
            ref="form"
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 22 }}
            onFinish={this.onFinish}
            autoComplete="off"
            initialValues={{ role_id: this.props.userList.role_id }}
          >
            <Form.Item
              hidden="ture"
              label="藏起来"
              name="_id"
              initialValue={this.props.userList._id}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="用户名"
              name="username"
              initialValue={this.props.userList.username}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="手机号"
              name="phone"
              initialValue={this.props.userList.phone}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              initialValue={this.props.userList.email}
            >
              <Input />
            </Form.Item>
            <Form.Item label="角色" name="role_id">
              <Select style={{ width: 120 }}>
                {this.props.user.roles.map((value) => {
                  return (
                    <Option key={value._id} value={value._id}>
                      {value.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
export default connect((state) => ({ user: state.user }), { getUserAsync })(
  ReviseUser
);
