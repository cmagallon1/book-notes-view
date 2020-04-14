import React, { Component } from 'react';
import SignupForm from './components/signupForm';
import './components/signupForm.scss';
import {Container, Row, Col, h1} from 'react-bootstrap'
import NavigationBar from '../navbar/navbar';
import { withRouter } from 'react-router'
import { setCurrentUser, postWithoutToken } from '../../axios/index.js'

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
    postWithoutToken('users', { user: this.state })
    .then(res => this.getUserCredentials())
    .catch(error => console.log(error.response))
  }

  getUserCredentials = () => {
    const user = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }
    postWithoutToken('users/signin', user)
    .then(res => this.saveAndRedirectUser(res))
    .catch(error => console.log(error))
  }

  saveAndRedirectUser = res => {
    setCurrentUser(res.data.data)
    this.props.history.push('/dashboard')
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

export default withRouter(Signup);
