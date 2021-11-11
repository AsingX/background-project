import React, { Component } from 'react'
import { Card, Select, Input, Button, Table, Spin } from 'antd'
import { connect } from 'react-redux'
import { goodsAsync, searchAsync } from '../../../redux/actions/goods'
import { updateStatusAsync } from '../../../redux/actions/updateStatus'
import { categoryAsync } from '../../../redux/actions/category'

const { Option } = Select
class Product extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: [],
            columns: [],
            selectValue: "productName",
            searchValue: '',
            searchModel: false,
            page: 0,
        }
    }


    onChangeSelect = (e) => {
        this.setState({
            selectValue: e
        })
    }

    onChangeInputSearchValue = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    onClickSearch = () => {
        this.setState({
            searchModel: true
        })
        const { selectValue, searchValue } = this.state
        this.props.searchAsync({
            page: 1,
            type: selectValue,
            data: searchValue
        })
    }

    onChangePage = (e) => {
        this.setState({
            page: e
        })
        const { selectValue, searchValue } = this.state
        !this.state.searchModel ? this.props.goodsAsync(e) : this.props.searchAsync({
            page: e,
            type: selectValue,
            data: searchValue
        })

    }

    onClickShelves = (id) => {
        let { page, selectValue, searchValue } = this.state
        let status = this.showShelves(id)
        this.props.updateStatusAsync({ productId: id, status: 1 })

        if (status === 1) {
            this.props.updateStatusAsync({ productId: id, status: 2 })
            !this.state.searchModel ? this.props.goodsAsync(page) : this.props.searchAsync({
                page,
                type: selectValue,
                data: searchValue
            })

        } else {
            this.props.updateStatusAsync({ productId: id, status: 1 })
            !this.state.searchModel ? this.props.goodsAsync(page) : this.props.searchAsync({
                page,
                type: selectValue,
                data: searchValue
            })
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

    onGotoDetail = (id, url) => {
        const { goodsData } = this.props
        let arr = goodsData.list.filter((item) => {
            return item._id === id
        })
        let arrId = this.arrToObj()
        arrId.forEach((item) => {
            if (item._id === arr[0].pCategoryId) {
                arr[0].categoryName = item.name
            }
        })
        this.props.history.push({ pathname: url, state: arr })
    }


    showShelves = (id) => {
        const { goodsData } = this.props
        let arr = goodsData.list.filter((item) => {
            return item._id === id
        })
        return arr[0].status
    }

    componentDidMount() {
        this.props.goodsAsync(1)
        this.props.categoryAsync('list?parentId=0')
        this.setState({
            page: 1,
            searchModel: false,
            columns: [
                {
                    width: 200,
                    title: '商品名称',
                    dataIndex: 'name',
                },
                {

                    title: '商品描述',
                    dataIndex: 'desc',
                },
                {
                    width: 100,
                    title: '价格',
                    dataIndex: 'price',
                    render: (price) => {
                        return "¥" + price
                    },
                },

                {
                    width: 100,
                    title: '状态',
                    dataIndex: '_id',
                    render: (_id) => {
                        return (
                            <>
                                <Button
                                    type="primary"
                                    onClick={this.onClickShelves.bind(this, _id)}
                                    children={this.showShelves(_id) === 2 ? "下架" : "上架"}
                                ></Button>
                                <span children={this.showShelves(_id) === 2 ? "在售" : "已下架"}></span>
                            </>
                        )
                    },
                },
                {
                    width: 100,
                    title: '操作',
                    dataIndex: '_id',
                    render: (_id) => {
                        return (
                            <>
                                <a onClick={this.onGotoDetail.bind(this, _id, "/product/detail")}> 详情</a><br />
                                <a onClick={this.onGotoDetail.bind(this, _id, "/product/addupdata")}> 修改</a>
                            </>
                        )
                    },
                },
            ]
        })

    }

    cardTitle = () => {
        return (
            <>
                <Select value={this.state.selectValue} style={{ float: 'left' }} onChange={this.onChangeSelect} >
                    <Option value="productName">按名称搜索</Option>
                    <Option value="productDesc">按描述搜索</Option>
                </Select>
                <Input placeholder="关键字"
                    value={this.state.searchValue}
                    onChange={this.onChangeInputSearchValue}
                    style={{ width: 150, float: 'left', margin: "0 15px" }} />
                <Button type="primary" onClick={this.onClickSearch} style={{ float: 'left' }}>搜索</Button>
                <Button type="primary" onClick={() => {
                    this.props.history.push("/product/addupdata")
                }} style={{ float: 'right' }}>添加商品</Button>
            </>
        )
    }

    componentWillMount() {
        this.setState({
            page: 1
        })
    }

    render() {
        return (
            <Spin tip="Loading..." spinning={!this.props.goodsData.pageNum}>
                <Card title={this.cardTitle()}>
                    <Table
                        bordered
                        rowKey="_id"
                        pagination={{
                            defaultCurrent: this.state.page,
                            total: this.props.goodsData.pages * 10,
                            onChange: this.onChangePage,
                            showQuickJumper: true
                        }}
                        dataSource={this.props.goodsData.list}
                        columns={this.state.columns} />
                </Card>
            </Spin>
        )
    }
}

export default connect((state) => ({ goodsData: state.goods, categoryData: state.category }),
    { goodsAsync, searchAsync, updateStatusAsync, categoryAsync })(Product)
