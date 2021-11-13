//引入常量
import { ADD_CATEGORY } from "../constant";

//默认值
const init = {
  status: 0,
  data: {
    parentId: "618a3bbb8ce9355b07f639b1",
    _id: "618a3bd28ce9355b07f639b2",
    name: "erzi",
    __v: 0,
  },
};
export default function addCategoryReducer(preState = init, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;
  //判断进入的方法执行相对应的操作
  switch (type) {
    case ADD_CATEGORY:
      return (preState = { ...data });
    default:
      return preState;
  }
}
