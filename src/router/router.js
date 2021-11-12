import loadable from "@loadable/component";

//路由的懒加载
const index = loadable(() => import("../pages/Admin/index.jsx"));
const Login = loadable(() => import("../pages/Login"));

const Home = loadable(() => import("../pages/Admin/Home"));
const User = loadable(() => import("../pages/Admin/User"));
const Category = loadable(() => import("../pages/Admin/Category"));
const Product = loadable(() => import("../pages/Admin/Product"));
const Role = loadable(() => import("../pages/Admin/Role"));

export const routerConfig = [
  {
    path: "/",
    component: index,
    auth: true,
  },
  {
    path: "/login",
    component: Login,
  },
];
