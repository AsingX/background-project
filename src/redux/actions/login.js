//引入常量
import { LOGIN } from "../constant";
//引入封装好的axios
import { postAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const login = (data) => ({ type: LOGIN, data });

// 异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const loginAsync = (values) => {
  return (dispatch) => {
    postAxios("login", "/api1", values, (data) => {
      dispatch(login(data.data));
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
