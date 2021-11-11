import React, { Component } from 'react'
import { Card, List, Avatar, Input, Form, Button } from 'antd'
import './index.scss'
import Upload from "./Upload"
import { connect } from 'react-redux'
import RichTextEditor from './RichTextEditor'
import { categoryAsync } from '../../../../redux/actions/category'
import {
    LeftCircleTwoTone
} from "@ant-design/icons";
import Cascader from './Cascader'
import { postAxios } from "../../../../utils/axios";

const { TextArea } = Input
const Item = List
class Addupdata extends Component {
    constructor() {
        super()
        this.pw = React.createRef()
        this.state = {
            cascaderValue: [],
            richTextEditorValue: '',
            imgs: [],
        }
    }
    arrToObj = () => {
        let arr = []
        const { categoryData } = this.props
        for (let key in categoryData) {
            arr.push(categoryData[key])
        }
        arr.forEach((item) => {
            item.isLeaf = false
        })
        return arr
    }
    onChangeCascader = (value, value2) => {
        this.setState({
            cascaderValue: value
        })
    }

    onFinish = (value) => {
        this.setState({
            richTextEditorValue: this.Child.getDetail(),
            imgs: this.pw.current.getImgs()
        })
        const { cascaderValue, richTextEditorValue, imgs } = this.state
        if (cascaderValue[0] === undefined) {
            value.pCategoryId = this.props.location.state[0].pCategoryId
            value.categoryId = this.props.location.state[0].categoryId
        } else {
            value.pCategoryId = cascaderValue[0]
            value.categoryId = cascaderValue[1]
        }
        value.imgs = imgs
        value.detail = richTextEditorValue
        console.log(value);
        postAxios('manage/product/add',
            '/api1',
            value,
            (data) => {
            }
        )
        if (cascaderValue[0] === undefined) {

        } else {

        }


    }

    onFinishFailed = () => {

    }

    renderItem = () => {
        return (<>
        </>)
    }

    cardTitle = () => {
        return (
            <>
                <a style={{ float: "left" }}><LeftCircleTwoTone style={{ fontSize: 30 }} /></a>
                <h1 style={{ float: "left", margin: "0 15px" }}>商品详情</h1>
            </>
        )
    }

    componentDidMount() {
        this.props.categoryAsync('list?parentId=0')
    }

    render() {
        const { nameInit, descInit, priceInit } = this.state
        return (
            <>

                <Card title={this.cardTitle()}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 2,
                        }}
                        wrapperCol={{
                            span: 8,
                        }}
                        initialValues={{
                            remember: true,
                            name: this.props.location.state !== undefined ? this.props.location.state[0].name : '',
                            desc: this.props.location.state !== undefined ? this.props.location.state[0].desc : '',
                            price: this.props.location.state !== undefined ? this.props.location.state[0].price : '',
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="商品名称"
                            name='name'
                        >
                            <Input placeholder="请输入商品名称" />

                        </Form.Item>
                        <Form.Item
                            label="商品描述"
                            name='desc'
                        >
                            <TextArea
                                rows={4}
                                placeholder="请输入商品描述" />
                        </Form.Item>
                        <Form.Item
                            label="商品价格"
                            name='price'
                        >
                            <Input
                                prefix="￥"
                                suffix="RMB"
                                type="number"
                                placeholder="请输入商品价格" />
                        </Form.Item>
                        <Form.Item
                            label="商品分类"
                        >
                            <Cascader
                                init={this.props.location.state}
                                options={this.arrToObj()}
                                onChangeCascader={this.onChangeCascader}
                            />
                        </Form.Item>
                        <Form.Item
                            label="商品图片"
                        >
                            <Upload ref={this.pw} imgs={this.state.imgs} goods={this.props.location.state} />
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 2 }}
                            wrapperCol={{ span: 20 }}
                            label="商品详情"
                        >
                            <RichTextEditor onRef={c => this.Child = c} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 0, span: 1 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </>
        )
    }
}

export default connect((state) => ({ categoryData: state.category }),
    { categoryAsync })(Addupdata)



