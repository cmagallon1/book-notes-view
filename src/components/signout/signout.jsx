import React from 'react'
import { Redirect } from 'react-router-dom';
import { deleteSession } from '../../axios/index';

const Signout = () => {
  deleteSession()
  .catch(error => console.log(error.response))
  return ( <Redirect to={{ pathname: "/" }}/>)
}

export default Signout;


