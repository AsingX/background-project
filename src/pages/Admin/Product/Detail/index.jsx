import React, { Component } from 'react'
import { Card, List, Avatar } from 'antd'
import { connect } from 'react-redux'
import { categoryAsync } from '../../../../redux/actions/category'
import {
    LeftCircleTwoTone
} from "@ant-design/icons";


const { Item } = List
const { Meta } = Item
class Detail extends Component {
    constructor() {
        super()
        this.state = {
            goodsListTitle: ["商品名称", "商品描述", "商品价格", "所属分类", "商品图片", "商品详情"],
            goodsItem: ["name", "desc", "price", "pCategoryId", "imgs", "detail"]
        }
    }
    componentDidMount() {
        this.props.categoryAsync(`info?categoryId=${this.props.location.state[0].pCategoryId}`)
    }

    renderTitle = (index) => {
        return <div style={{ float: 'left', fontSize: '20px' }}>{this.state.goodsListTitle[index] + '：'}</div>
    }

    renderDescription = (index) => {
        let data = this.props.location.state[0]
        let key = this.state.goodsItem[index]
        return <>
            {this.renderMeta(data, key)}
        </>
    }

    renderMeta = (data, key) => {
        switch (key) {
            case "pCategoryId":
                return this.props.categoryData.name
            case "price":
                return data[key] + "元"
            case "imgs":

                return data[key].map((item) => {
                    return <img key={item} style={{ width: "80px", height: "80px", margin: "0 5px" }} src={'http://localhost:5000/upload/' + item}></img>
                })
            case "detail":
                console.log(data[key]);
                return <div dangerouslySetInnerHTML={{ __html: data[key] }}></div>
            default:
                return data[key]
        }
    }
    onCallback = () => {
        this.props.history.push("/product")
    }

    renderItem = () => {
        return <>
            <List
                itemLayout="horizontal"
                dataSource={this.state.goodsListTitle}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            title={this.renderTitle(index)}
                            description={this.renderDescription(index)}
                        />
                    </List.Item>
                )}
            />

        </>
    }

    cardTitle = () => {
        return (
            <>
                <a onClick={this.onCallback} style={{ float: "left" }}><LeftCircleTwoTone style={{ fontSize: 30 }} /></a>
                <h1 style={{ float: "left", margin: "0 15px" }}>商品详情</h1>
            </>
        )
    }

    render() {

        // console.log(this.props.location.state);

        return (
            <>
                <Card title={this.cardTitle()} >
                    <List>
                        {this.renderItem()}
                    </List>
                </Card>
            </>
        )
    }
}

export default connect((state) => ({ categoryData: state.category }),
    { categoryAsync })(Detail)