import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SigninForm from './components/signinForm';
import './components/signinForm.scss';
import NavigationBar from '../navbar/navbar';
import { withRouter } from 'react-router';
import { postWithoutToken, setCurrentUser } from '../../axios/index';

class Signin extends Component {

  state = {
    email: '',
    password: ''
  }

  valuesHandler = (key, value) => {
    this.setState({ [key]: value })
  }

  redirectUserHandler = (res) => {
    setCurrentUser(res.data.data)
    this.props.history.push('/dashboard')
  }

  signinHandler = (e) => {
    e.preventDefault();
    postWithoutToken('users/signin', { user: this.state })
    .then(res => this.redirectUserHandler(res))
    .catch(error => console.log(error.response))
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

export default withRouter(Signin);
