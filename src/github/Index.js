import React, { useState } from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { gitContext } from './context/Context';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const Index = () => {

  let [login, setLogin] = useState(false);

  return (
    <gitContext.Provider value={{setLogin, login}}>
      <Router>
        <Switch>
          <Route path='/' exact component={login?Home:Login} />
          <Route path='*' component={Error}/>
        </Switch>
      </Router>
    </gitContext.Provider>
  )
}

export default Index
