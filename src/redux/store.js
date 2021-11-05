/**
 * 该文件专门用于暴露一个store对象,整个应用只有一个store对象
 */
//引入createStore ,专门用于常见redux中最为核心的store对象,不进行异步任务的样子(指手画脚的)
// import { createStore } from "redux";

//引入为Count组件服务的reducer(干活的)
import countReducer from "./count_reducer";

//当需要store执行异步任务时需要进行以下操作
import thunk from "redux-thunk";

//需要进行异步任务时,添加applyMiddleware
import { createStore, applyMiddleware } from "redux";
//进行异步任务
export default createStore(countReducer, applyMiddleware(thunk));

//不需要进行异步操作时直接暴露store
// export default createStore(countReducer);
