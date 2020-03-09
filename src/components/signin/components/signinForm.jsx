import React from 'react'
import { Form, Button } from 'react-bootstrap';

const SigninForm = ({ getValues, onSubmit }) => (
  <Form>
    <Form.Group controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" onChange={(e)=>getValues("email", e.target.value)} placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={(e)=>getValues("password", e.target.value)} placeholder="Password" />
    </Form.Group>
   <Button variant="success" type="submit" onClick={onSubmit} className="mt-2">
      Sign in
    </Button>
  </Form>
)

export default SigninForm;
