import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SigninForm from './components/signinForm';
import './components/signinForm.scss'
import NavigationBar from '../navbar/navbar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
class Signin extends Component {

  state = {
    email: '',
    password: '',
    redirect: false
  }

  valuesHandler = (key, value) => {
    this.setState({ [key]: value })
  }

  signinHandler = (e) => {
    e.preventDefault();
    let body = {
      user: this.state
    }
    axios.post('https://book-notes-api.herokuapp.com/users/signin', body)
    .then(res => {
      let a = useHistory();
      a.push("/dashboard")
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
      <>
        <NavigationBar/>
        <Container className="text-center signin mt-5">
          <h1 className="mt-3 mb-4">Sign in to noteBook</h1>
          <Row>
            <Col md="5">
              <SigninForm getValues={this.valuesHandler} onSubmit={this.signinHandler} /> 
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Signin;
