import React, { Component } from "react";

import { Button, Modal, Input, Form, Select, message } from "antd";

import { postAxios } from "../../../../utils/axios";

import { connect } from "react-redux";
import { getUserAsync } from "../../../../redux/actions/user";

const { Option } = Select;

class createUser extends Component {
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
    postAxios("/manage/user/add", "/api1", values, (data) => {
      this.props.getUserAsync();
      if (data.status === 1) {
        message.error(data.msg);
      } else {
        message.success("创建成功");
      }
    });
  };

  render() {
    return (
      <>
        <Button type="primary" shape="round" onClick={this.showModal}>
          创建用户
        </Button>

        <Modal
          title="添加用户"
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
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            autoComplete="off"
          >
            <Form.Item label="用户名" name="username">
              <Input />
            </Form.Item>

            <Form.Item label="密码" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item label="手机号" name="phone">
              <Input />
            </Form.Item>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="角色" name="role_id">
              <Select style={{ width: 120 }}>
                {!this.props.user.roles
                  ? ""
                  : this.props.user.roles.map((value) => {
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
  createUser
);
