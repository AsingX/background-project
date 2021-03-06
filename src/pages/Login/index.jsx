import React, { useEffect } from 'react';
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { useHistory } from "react-router-dom"
import './index.scss'
import { postAxios } from '../../utils/axios'

const Login = function () {
    useEffect(() => {
       
    }, [])

    const onFinish = (values) => {
        console.log('Success:', values);
        postAxios('login', '/api1', values, (data) => {
            if (data.data) {
                
            } else {
                message.error('用户名或密码错误');
            }
        })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div id="login">
            <Card className={"aSing-kapian-center"} title="登陆" style={{ width: 400 }}>

                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>

            </Card>
        </div>
    )
}


export default Login;