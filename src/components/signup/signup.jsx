import React, { Component } from 'react';
import SignupForm from './components/signupForm';
import './components/signupForm.scss';
import {Container, Row, Col, h1} from 'react-bootstrap'
import NavigationBar from '../navbar/navbar';
import axios from 'axios';

class Signup extends Component { 

  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email:''
  }

 
  valuesHandler = (key, value) => {
    this.setState({ [key]: value })
  }

  signupHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    let body = {
      user: this.state
    }
    axios.post('https://book-notes-api.herokuapp.com/users/signup', body)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
      <>
        <NavigationBar/>
        <Container className="text-center signup mt-5">
          <h1 className="mt-3 mb-4">Create you account un NoteBook</h1>
          <Row>
            <Col md="5">
              <SignupForm getValues={this.valuesHandler} onSubmit={this.signupHandler}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Signup;
