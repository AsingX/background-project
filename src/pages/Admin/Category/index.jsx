import React, { Children, Component } from 'react'
import { Card, Select, Input, Button, Table, Spin, Modal, Form, List } from 'antd'
import { connect } from 'react-redux'
import { categoryAsync } from '../../../redux/actions/category'
import { addCategoryAsync } from '../../../redux/actions/addCategory'
import { categoryChildrenAsync } from '../../../redux/actions/categoryChildren'
import { updateCategoryAsync } from '../../../redux/actions/updateCategory'


const { Item } = List
const { Option } = Select
class Category extends Component {

    constructor() {
        super()
        this.state = {
            dataSource: [],
            columns: [],
            selectValue: "0",
            searchValue: '0',
            inputValue: '',
            updataValue: '',
            updataId: "0",
            page: 0,
            isModalVisible: false,
            isModalChildren: false,
            updataChildren: false,
        }
    }

    onClickSearch = () => {

    }
    onRevise = (id) => {
        this.setState({
            updataChildren: true,
            updataId: id
        })

    }
    onCheckChildren = (id) => {
        console.log(id)
        this.setState({
            isModalChildren: true
        })
        this.props.categoryChildrenAsync(`list?parentId=${id}`)
    }
    onGotoDetail = (id, url) => {
        const { goodsData } = this.props
        let arr = goodsData.list.filter((item) => {
            return item._id === id
        })

        this.props.history.push({ pathname: url, state: arr })
    }
    onClickSearch = () => {
        this.setState({
            isModalVisible: true
        })
    }
    inputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    updataValue = (e) => {
        console.log(e.target.value);
        this.setState({
            updataValue: e.target.value
        })
    }
    onSelect = (value) => {
        this.setState({
            searchValue: value
        })
    }
    handleOk = () => {
        this.setState({
            isModalVisible: false,
            searchValue: '0',
            inputValue: ''
        })
        let obj = {}
        obj.parentId = this.state.searchValue
        obj.categoryName = this.state.inputValue
        console.log(this.state.searchValue, this.state.inputValue);
        this.props.addCategoryAsync(obj)

        this.props.categoryAsync("list?parentId=0")
    }
    childrenCancel = () => {
        this.setState({
            isModalChildren: false
        })
    }
    onOkUpdata = () => {
        let obj = {}
        let { updataValue, updataId } = this.state
        obj.categoryId = updataId
        obj.categoryName = updataValue
        this.props.updateCategoryAsync(obj)
        this.props.categoryAsync("list?parentId=0")
        this.setState({
            updataChildren: false,
            updataValue: ''
        })
    }
    onCancelUpdata = () => {
        this.setState({
            updataChildren: false
        })
    }

    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    }

    renderItem = () => {
        let { categoryData } = this.props
        let arr = [{ parentId: '0', _id: '0', name: '一级菜单', __v: 0 }]
        for (let key in categoryData) {
            arr.push(categoryData[key])
        }

        return arr.map((item) => {
            return (
                <Option value={item._id} key={item._id + item._name}>{item.name}</Option>
            )
        })
    }
    renderChildrenItem = () => {
        let arr = this.objToArr(this.props.categoryChildrenData)
        if (arr.length !== 0) {
            return arr.map((item) => {
                return <Item key={item._id} boolean={true} style={{ paddingLeft: 30 }} >{item.name}</Item>
            })
        }

    }
    objToArr = (data) => {
        let obj = data
        let arr = []
        for (let key in obj) {
            arr.push(obj[key])
        }
        return arr
    }

    cardTitle = () => {
        return (
            <>
                <div style={{ float: 'left' }}>一级分类列表</div>
                <Button type="primary" onClick={this.onClickSearch} style={{ float: 'right' }}>+ 添加</Button>
            </>
        )
    }

    componentDidMount() {
        this.props.categoryAsync("list?parentId=0")
        this.setState({
            page: 1,
            columns: [
                {
                    title: '分类名称',
                    dataIndex: 'name',
                },
                {
                    width: 150,
                    title: '操作',
                    dataIndex: '_id',
                    render: (_id) => {
                        return (
                            <>
                                <a ><span onClick={this.onRevise.bind(this, _id)}>修改分类</span></a><br />
                                <a ><span onClick={this.onCheckChildren.bind(this, _id)}>查看子分类</span></a>
                            </>
                        )
                    },
                },
            ]
        })
    }

    componentWillMount() {
        this.setState({
            page: 1
        })
    }

    render() {

        return (

            <Card title={this.cardTitle()}>
                <Modal
                    title="添加分类"
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
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item >
                            <Select
                                onChange={this.onSelect}
                                name="role_id"
                                style={{ width: 450 }}
                                defaultValue={this.state.selectValue}
                            >
                                {this.renderItem()}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                style={{ width: 450 }}
                                value={this.state.inputValue}
                                onChange={this.inputChange}
                            />
                        </Form.Item>
                    </Form>
                </Modal>

                <Table
                    bordered
                    rowKey="_id"
                    pagination={{ defaultPageSize: 3, showQuickJumper: true }}
                    columns={this.state.columns}
                    dataSource={this.objToArr(this.props.categoryData)}
                />

                <Modal
                    title="查看子分类"
                    visible={this.state.isModalChildren}
                    onOk={this.childrenCancel}
                    onCancel={this.childrenCancel}
                    okText="确定"
                    cancelText="取消"
                    destroyOnClose="ture"
                >
                    <List>
                        {this.renderChildrenItem()}
                    </List>
                </Modal>

                <Modal
                    title="修改分类"
                    visible={this.state.updataChildren}
                    onOk={this.onOkUpdata}
                    onCancel={this.onCancelUpdata}
                    okText="确定"
                    cancelText="取消"
                    destroyOnClose="ture"
                >
                    <Input value={this.state.updataValue} onChange={this.updataValue} />
                </Modal>

            </Card>
        )
    }
}

export default connect((state) => ({ categoryData: state.category, categoryChildrenData: state.categoryChildren }),
    { categoryAsync, addCategoryAsync, categoryChildrenAsync, updateCategoryAsync })(Category)
