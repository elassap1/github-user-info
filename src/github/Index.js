import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { gitContext } from './context/Context';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import User from './pages/userPage/User';

const Index = () => {

  let {isAuthenticated} = useAuth0();

  return (
    <gitContext.Provider value={{}}>
      <Router>
        <Switch>
          <Route path='/' exact component={isAuthenticated?Home:User} />
          <Route path='*' component={Error}/>
        </Switch>
      </Router>
    </gitContext.Provider>
  )
}

export default Index
