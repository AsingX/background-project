//引入常量
import { ROLEDATA } from "../constant";

//默认值

export default function countReducer(preState = [], action) {
  const { type, data } = action;
  //判断进入的方法执行相对应的操作
  switch (type) {
    case ROLEDATA:
      return (preState =  [...data] );
    default:
      return preState;
  }
}
