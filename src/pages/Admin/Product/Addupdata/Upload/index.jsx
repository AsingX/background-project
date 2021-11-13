import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';



class Demo extends React.Component {

    static propTypes = {
        imgs: PropTypes.array
    }

    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false, // 标识是否显示大图预览Modal
            previewImage: '', // 大图的url
            fileList: [

            ]
        }

        let fileList = []

        // 如果传入了imgs属性
        const { imgs } = this.props
        if (this.props.goods !== undefined) {
            let { imgs } = this.props.goods[0]
            fileList = imgs.map((img, index) => ({
                uid: -index, // 每个file都有自己唯一的id
                name: img, // 图片文件名
                status: 'done', // 图片状态: done-已上传, uploading: 正在上传中, removed: 已删除
                url: "http://localhost:5000/upload/" + img,
                response: {
                    data: {
                        name: img
                    }
                }
            }))
        }

        this.state = {
            previewVisible: false, // 标识是否显示大图预览Modal
            previewImage: '', // 大图的url
            fileList // 所有已上传图片的数组
        }

    }

    getImgs = () => {
        return this.state.fileList.map(item => item.response.data.name)
    }


    onRemove = (value) => {
        console.log(value);
        this.props.deleteImg({ name: value.name })
    }

    onChange = ({ fileList: newFileList, fileList: file, }) => {
        this.setState({
            fileList: newFileList
        });
    };

    onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);

    };

    render() {
        return (
            <>
                <ImgCrop rotate>
                    <Upload
                        action="/api1/manage/img/upload"
                        accept='image/*'
                        listType="picture-card"
                        fileList={this.state.fileList}
                        name='image'
                        onChange={this.onChange}
                        onPreview={this.onPreview}
                        onRemove={this.onRemove}
                    >
                        {this.state.fileList.length < 5 && '+ Upload'}
                    </Upload>
                </ImgCrop>
            </>
        );
    }

};

export default Demo