import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'
import {
    LeftCircleTwoTone
} from "@ant-design/icons";
export default class index extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: 'Ant Design Title 1',
                },
                {
                    title: 'Ant Design Title 2',
                },
                {
                    title: 'Ant Design Title 3',
                },
                {
                    title: 'Ant Design Title 4',
                },
            ]
        }
    }

    cardTitle = () => {
        return (
            <>
                <a style={{ float: "left" }}><LeftCircleTwoTone style={{ fontSize: 30 }} /></a>
                <h1 style={{ float: "left", margin: "0 15px" }}>商品详情</h1>
            </>
        )
    }


    render() {
        return (
            <>
                <Card title={this.cardTitle()}>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                />
                            </List.Item>
                        )}
                    />,
                </Card>
            </>
        )
    }
}
