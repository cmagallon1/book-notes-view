import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Signin from '../signin/signin';
import Signup from '../signup/signup';
import Menu from '../menu/menu';
import NoMatch from '../signin/signin';
import Cookies from 'js-cookie';

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

const Signout = () => {
  Cookies.remove('token')
  return ( <Redirect to={{ pathname: "/" }}/>)
}

export default Routes




