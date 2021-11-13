//引入常量
import { GOODS } from "../constant";

//默认值
const goodsDataInit = {
  status: 0,
  data: {
    pageNum: 0,
    total: 5,
    pages: 1,
    pageSize: 5,
    list: [],
  },
};

export default function goodsReducer(preState = goodsDataInit.data, action) {
  //解构获取action里的{type、data}
  const { type, data } = action;

  //判断进入的方法执行相对应的操作
  switch (type) {
    case GOODS:
      console.log(data);
      return (preState = { ...data.data });
    default:
      return preState;
  }
}
