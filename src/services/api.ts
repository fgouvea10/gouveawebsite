import axios from 'axios';

let token: string | null = '';

if (typeof window !== 'undefined') {
  token = localStorage.getItem('@gouveawebsite:token');
}

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
