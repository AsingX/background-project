import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoleAsync } from "../../../../redux/actions/role";

import { Button, Modal, Input, Form, Tree } from "antd";

// import { postAxios } from "../../../../utils/axios";

class CreateRole extends Component {
  state = {
    isModalVisible: false,
    treeData: [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            children: [
              {
                title: "leaf",
                key: "0-0-0-0",
              },
              {
                title: "leaf",
                key: "0-0-0-1",
              },
            ],
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [
              {
                title: <span>sss</span>,
                key: "0-0-1-0",
              },
            ],
          },
        ],
      },
    ],
  };

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
    console.log(values);
    // postAxios("/manage/role/add", "/api1", values, (data) => {
    //   if (data.status === 1) {
    //     message.error(data.msg);
    //   } else {
    //     message.success("创建成功");
    //   }
    // });
  };
  onCheck = (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <Button type="primary" shape="round" onClick={this.showModal}>
          设置角色权限
        </Button>

        <Modal
          title="设置角色权限"
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
            <Form.Item label="角色名称" name="auth_name">
              <Input />
            </Form.Item>
            <Form.Item label="权限" name="menus">
              <Tree
                onCheck={this.onCheck}
                checkable
                defaultExpandAll
                treeData={this.state.treeData}
              />
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
