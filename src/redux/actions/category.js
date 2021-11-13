//引入常量
import { CATEGORY } from "../constant";
//引入封装好的axios
import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const category = (data) => ({ type: CATEGORY, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const categoryAsync = (values) => {
  return (dispatch) => {
    getAxios(
      `/manage/category/${values}`,
      "/api1",
      (data) => {
        dispatch(category(data.data));
      }
    );
  };
};
