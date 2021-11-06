//引入常量
import { INCREMENT, DECREMENT } from "../constant";

//默认值
const initState = 0;
export default function countReducer(preState = initState, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;
  
  //判断进入的方法执行相对应的操作
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}
