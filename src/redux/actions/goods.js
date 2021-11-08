//引入常量
import { GOODS } from "../constant";
//引入封装好的axios
import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const goods = (data) => ({ type: GOODS, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const goodsAsync = (values) => {
  return (dispatch) => {
    getAxios(
      `/manage/product/list?pageNum=${values}&pageSize=3`,
      "/api1",
      (data) => {
        dispatch(goods(data.data));
      }
    );
  };
};

export const searchAsync = (values) => {
  return (dispatch) => {
    getAxios(
      `/manage/product/search?pageNum=${values.page}&pageSize=3&${values.type}=${values.data}`,
      "/api1",
      (data) => {
        dispatch(goods(data.data));
      }
    );
  };
};
