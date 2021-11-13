//引入常量
import { ADD_CATEGORY } from "../constant";
//引入封装好的axios
import { postAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const addCategory = (data) => ({ type: ADD_CATEGORY, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const addCategoryAsync = (values) => {
  return (dispatch) => {
    postAxios("/manage/category/add", "/api1", values, (data) => {
      dispatch(addCategory(data.data));
    });
  };
};


export const CATEGORY_CHILDREN = "categoryChildren";