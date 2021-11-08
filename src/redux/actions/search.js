//引入常量
import { SEARCH } from "../constant";
//引入封装好的axios
import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const search = (data) => ({ type: SEARCH, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const searchAsync = (values) => {
  console.log(values);
  return (dispatch) => {
    getAxios(
      `/manage/product/search?pageNum=${values.page}&pageSize=3&${values.type}=${values.data}`,
      "/api1",
      (data) => {
        dispatch(search(data.data));
      }
    );
  };
};
