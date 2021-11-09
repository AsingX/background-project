//引入常量
import { UPDATE_CATEGORY } from "../constant";

//默认值
export default function updateCategoryReducer(preState = {}, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case UPDATE_CATEGORY:
      return (preState = { ...data });
    default:
      return preState;
  }
}

