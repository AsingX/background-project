//引入常量
import { INCREMENT, DECREMENT} from "../constant";
//暴露一个函数，函数return一个对象 对象里放type和data
export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });

//异步操作返回一个函数，函数里做异步操作，redux调用后传入一个dispatch，
export const incrementAsync = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, 500);
  };
};
