import axios from 'axios';

let token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage.getItem('@gouveawebsite:token');
}

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
