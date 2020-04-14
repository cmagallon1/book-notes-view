import axios from 'axios';
import Cookies from 'js-cookie';

const url = `https://book-notes-api.herokuapp.com`;

const config = {
  headers: {
    'Content-Type': 'application/json',
    'ACCEPT': 'application/json',
  }
}

const addTokenToConfig = () => {
  let newConfig = { ...config };
  newConfig.headers['Authorization'] = getToken();
  return newConfig;
}

export const getCurrentUser = () => Cookies.get('currentUser');

export const setCurrentUser = data => Cookies.set('currentUser', data);

export const deleteCurrentUser = () => Cookies.remove('currentUser');

export const getToken = () => {
  let user = JSON.parse(Cookies.get('currentUser'));
  return user.token;
}

export const postPetition = async (path, data) => {
  const newConfig = addTokenToConfig()
  return await axios.post(`${url}/${path}`, data, newConfig)
}

export const postWithoutToken = async (path, data) => {
  return await axios.post(`${url}/${path}`, data, config)
}

export const getPetition = async path => {
  const newConfig = addTokenToConfig()
  return await axios.get(`${url}/${path}`, newConfig)
}

export const getWithoutToken = async path => {
  return await axios.get(`${url}/${path}`, config)
}

export const deleteSession = async path => {
  const newConfig = addTokenToConfig()
  return await axios.delete(`${url}/users/signout`, newConfig)
}

