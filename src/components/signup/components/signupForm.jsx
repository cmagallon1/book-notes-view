import React from 'react';
import {Form, Button} from 'react-bootstrap';

const SignupForm = ({getValues, onSubmit}) => (
  <Form>
    <Form.Group controlId="formGroupFirstname">
      <Form.Label>Firstname</Form.Label>
      <Form.Control type="input" onChange={(e) => getValues("first_name", e.target.value)} placeholder="firstname" />
    </Form.Group>
    <Form.Group controlId="formGroupLastname">
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="input" onChange={(e) => getValues("last_name", e.target.value)} placeholder="lastname" />
    </Form.Group>
    <Form.Group controlId="formGroupUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="input" onChange={(e) => getValues("username", e.target.value)} placeholder="username" />
    </Form.Group>  
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" onChange={(e) => getValues("email", e.target.value)} placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={(e) => getValues("password", e.target.value)} placeholder="Password" />
    </Form.Group>
    <Button variant="success" type="submit" onClick={onSubmit} className="mt-2">
      Sign in
    </Button>
  </Form>
)

export default SignupForm;
