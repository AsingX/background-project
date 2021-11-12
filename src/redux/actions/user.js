//引入常量
import { USERDATA } from "../constant";
//引入封装好的axios

import { getAxios } from "../../utils/axios";
//暴露一个函数，函数return一个对象 对象里放type和data
export const getUser = (data) => ({ type: USERDATA, data });

export const getUserAsync = (callback) => {
  return (dispatch) => {
    getAxios("/manage/user/list", "api1", (data) => {
      const totalData = data.data.data;
      let userData = totalData.users;
      let rolesData = totalData.roles;
      userData.forEach((userValue) => {
        rolesData.forEach((rolesValue) => {
          if (rolesValue._id === userValue.role_id) {
            userValue.role_name = rolesValue.name;
            const date = new Date(userValue.create_time);
            userValue.create_time = date.toLocaleString();
            userValue.key = userValue._id;
          }
        });
      });
      dispatch(getUser(totalData));
      return callback()
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
