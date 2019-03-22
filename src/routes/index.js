// Node Modules
import React from 'react';

// Components
import { Route } from 'react-router-dom';
import Home from './home';
import Login from './login';

const AppRoutes = () => (
  <div>
    <Route exact path='/' component={Login} />
  </div>
);

export default AppRoutes;
