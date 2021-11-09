//引入常量
import { CATEGORY } from "../constant";

//默认值
const categoryDataInit = {
  status: 0,
  data: {
    parentId: "0",
    _id: "61849fea8ce9355b07f6398d",
    name: "加载中···",
    __v: 0,
  },
};

export default function categoryReducer(preState = categoryDataInit, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case CATEGORY:
      console.log(data);
      return (preState = { ...data.data });
    default:
      return preState;
  }
}


