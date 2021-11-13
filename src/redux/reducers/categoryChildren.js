//引入常量
import { CATEGORY_CHILDREN } from "../constant";

//默认值
const categoryChildrenDataInit = {
  status: 0,
  data: [
    {
      parentId: "618a69568ce9355b07f639c6",
      _id: "618a69608ce9355b07f639c7",
      name: "手机",
      __v: 0,
    },
  ],
};

export default function categoryChildrenReducer(
  preState = categoryChildrenDataInit,
  action
) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case CATEGORY_CHILDREN:
      console.log(data);
      return (preState = { ...data.data });
    default:
      return preState;
  }
}
