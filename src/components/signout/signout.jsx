import React from 'react'
import { Redirect } from 'react-router-dom';
import { deleteSession, deleteCurrentUser } from '../../axios/index';

const Signout = () => {
  deleteSession()
  .catch(error => console.log(error.response))
  deleteCurrentUser()
  return ( <Redirect to={{ pathname: "/" }}/>)
}

export default Signout;


