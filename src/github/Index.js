import React, {useState} from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { gitContext } from './context/Context';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const Index = () => {

  let [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin)
  }
console.log(isLogin)
  return (
    <gitContext.Provider value={{isLogin, handleLogin}}>
      <Router>
        <Switch>
          <Route path='/' exact component={isLogin?Home:Login} />
          <Route path='*' component={Error}/>
        </Switch>
      </Router>
    </gitContext.Provider>
  )
}

export default Index
