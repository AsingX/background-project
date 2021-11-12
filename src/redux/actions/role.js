//引入常量
import { ROLEDATA } from "../constant";
//引入封装好的axios

import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const getRole = (data) => ({ type: ROLEDATA, data });

export const getRoleAsync = (callback) => {
  return (dispatch) => {
    getAxios("/manage/role/list", "api1", (data) => {
      const totalData = data.data.data;
      totalData.forEach((value) => {
        value.key = value._id;
        value.create_time = new Date(value.create_time).toLocaleString();
      });

      dispatch(getRole(totalData));
      return callback();
    });
  };
};

// //引入常量
// import { LOGIN } from "../constant";
// //暴露一个函数，函数return一个对象 对象里放type和data
// export const login = (data) => ({ type: LOGIN, data });

// //异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
// // export const incrementAsync = (data) => {
// //   return (dispatch) => {
// //     setTimeout(() => {
// //       dispatch(increment(data));
// //     }, 500);
// //   };
// // };
