/**
 * 该文件用于创建一个为Count组件服务的reducer,reducer的本质是一个函数
 * reducer 函数会接到两个参数,分别为:之前的状态(preState),动作对象(action)
 */

//引用常量名称,便于书写
import { LOGIN } from "./constant";

//通过该函数,将数据进行加工,preState是上次返回的数值,因为首次提交时没有preState,所以给默认值为0
export default function countReducer(preState = {}, action) {
  //从action中提取type和data,一个是加工方式的名字,一个是加工所需要的数值
  const { type, data } = action;

  //根据type类型找到对应的处理方法
  switch (type) {
    //使用常量代替字符串的书写方式,便于更改和书写
    case LOGIN:
      //返回加工后的数据
      return (preState = { ...data });

    default:
      return preState;
  }
}
