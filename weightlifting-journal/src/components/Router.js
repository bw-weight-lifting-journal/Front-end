import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard.js';
import Signup from './Signup.js';
import Login from './Login';

export default function AppRouter() {
  return(
    <>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
    </Switch>
    </>
  )
}
