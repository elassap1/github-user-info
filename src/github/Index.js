import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { gitContext } from './context/Context';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const Index = () => {

  let {isAuthenticated} = useAuth0();
console.log(isAuthenticated)
  return (
    <gitContext.Provider value={{}}>
      <Router>
        <Switch>
          <Route path='/' exact component={isAuthenticated?Home:Login} />
          <Route path='*' component={Error}/>
        </Switch>
      </Router>
    </gitContext.Provider>
  )
}

export default Index
