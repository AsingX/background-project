//引入常量
import { LOGIN } from "../constant";

//默认值
export default function countReducer(preState = {}, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case LOGIN:
      return (preState = { ...data });
    default:
      return preState;
  }
}
