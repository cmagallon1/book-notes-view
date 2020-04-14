import React, { Component } from 'react';
import NavigationBar from '../navbar/navbar';
import { getCurrentUser, getPetition} from '../../axios/index';
class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
    this.user = JSON.parse(getCurrentUser())
  }
  

  componentDidMount(){
    getPetition(`users/${this.user.uuid}/books`)
    .then(res => this.setState(state => ({ books: res.data.books }) ))
    .catch(error => console.log(error.response))
  }

  render(){
    if(this.user) {
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
