//引入常量
import { UPDATE_STATUS } from "../constant";
//引入封装好的axios
import { postAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const updateStatus = (data) => ({ type: UPDATE_STATUS, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const updateStatusAsync = (values) => {
  return (dispatch) => {
    postAxios("/manage/product/updateStatus", "/api1", values, (data) => {
      dispatch(updateStatus(data.data));
    });
  };
};

