import React, { Component } from 'react';
import NavigationBar from '../navbar/navbar';
import Cookies from 'js-cookie';
import axios from 'axios';

class Menu extends Component {

  state = {
    books: []
  }

  takeError = (error) => {
    if(error.response) 
      return error.response
    else if(error.request)
      return error.request
    else
      return error.message
  }

  myHeader = () => {
    return {
      headers: {
        'Authorization': Cookies.get('token'),
        'Content-Type': 'application/json'
      }
    }
  }

  componentDidMount(){
    axios.get('https://book-notes-api.herokuapp.com/books', this.myHeader)
    .then(res =>{ console.log(res)})
    .catch(err => console.log(this.takeError(err)))
  }

  render(){
    if(Cookies.get('token')) {
      return(
        <>
          <NavigationBar/>
          <h1>menu</h1>
        </>
      )
    } else {
      return (
        <>
          <NavigationBar/>
          <h1>You're not logged</h1>
        </>
      )
    }
  }
}

export default Menu;
