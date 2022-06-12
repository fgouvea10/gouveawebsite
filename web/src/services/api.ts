import axios from 'axios';

// const getToken = () => localStorage.getItem('@gouveawebsite:token');

// const USER_TOKEN = getToken();

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  // headers: {
  //   Authorization: `Bearer ${USER_TOKEN}`,
  // },
});
