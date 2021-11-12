import React, { Component } from "react";

import { Button, Modal, Input, Form, message } from "antd";

import { postAxios } from "../../../../utils/axios";

import { connect } from "react-redux";
import { getRoleAsync } from "../../../../redux/actions/role";

class CreateRole extends Component {
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
    postAxios("/manage/role/add", "/api1", values, (data) => {
      // this.props.getUserAsync();重新获取redux
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
          创建角色
        </Button>

        <Modal
          title="添加角色"
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
            <Form.Item label="角色名称" name="roleName">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
export default connect((state) => ({ role: state.role }), { getRoleAsync })(
  CreateRole
);
