//引入常量
import { UPDATE_STATUS } from "../constant";

//默认值
const init = { status: 0 };
export default function updateStatusReducer(preState = init, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case UPDATE_STATUS:
      return (preState = { ...data });
    default:
      return preState;
  }
}
