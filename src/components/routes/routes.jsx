import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
import Menu from '../menu/menu';
import NoMatch from '../signin/signin';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <Signin/> 
        </Route>
        <Route exact path="/signin">
         <Signin/> 
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/dashboard">
          <Menu/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes




