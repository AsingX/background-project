/**
 * 该模块专门为Count组件生成action对象
 */
//使用引用常量,用常量写法代替字符串写法,避免写错,以及后期更改type名称时的工作量
import { INCREMENT, DECREMENT } from "./constant";

//创建action对象,便于书写
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//redux进行异步操作,
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};