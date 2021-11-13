import { Cascader } from 'antd';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { init } from 'events';

const optionLists = [];

const LazyOptions = (props) => {

    const [options, setOptions] = useState(optionLists);

    const onChange = (value, selectedOptions) => {
        props.onChangeCascader(value, selectedOptions)
    };
    useEffect(() => {
        setOptions([...props.options])
    }, [])

    const loadData = selectedOptions => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        axios.defaults.baseURL = '/api1';
        axios({
            url: `/manage/category/list?parentId=${selectedOptions[0]._id}`,
        })
            .then((res, req) => {
                targetOption.loading = false;
                targetOption.children = res.data.data
                setOptions([...options]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const dataInit = () => {


        if (props.init !== undefined) {
            let arr = [props.init[0].categoryName]
            axios.defaults.baseURL = '/api1';
            axios({
                url: `/manage/category/list?parentId=${props.init[0].pCategoryId}`,
            }).then((res) => {
                res.data.data.forEach((item) => {
                    if (item._id === props.init[0].categoryId) {
                        arr.push(item.name)
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
            return arr
        }

    }

    return <Cascader
        defaultValue={dataInit()}
        options={props.options}
        fieldNames={{ label: 'name', value: '_id', }
        }
        loadData={loadData}
        onChange={onChange}
        placeholder="请指定商品类型"
        changeOnSelect />;
};

export default LazyOptions