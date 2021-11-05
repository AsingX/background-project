import Home from './pages/Home'
import Login from './pages/Login'
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';

function App() {
  return <div>
    <Switch>
      <Route path='/login' component={Login}></Route>
      <Route path='/Home' component={Home}></Route>
    </Switch>
  </div>
}

export default App;
