import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signin from '../components/signin/signin';
import Signup from '../components/signup/signup';
import Signout from '../components/signout/signout';
import Menu from '../components/menu/menu';
import NoMatch from '../components/signin/signin';

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
        <Route exact path="/signout">
          <Signout/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;




