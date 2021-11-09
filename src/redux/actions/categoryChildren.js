//引入常量
import { CATEGORY_CHILDREN } from "../constant";
//引入封装好的axios
import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const categoryChildren = (data) => ({ type: CATEGORY_CHILDREN, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const categoryChildrenAsync = (values) => {
  return (dispatch) => {
    getAxios(
      `/manage/category/${values}`,
      "/api1",
      (data) => {
        dispatch(categoryChildren(data.data));
      }
    );
  };
};

