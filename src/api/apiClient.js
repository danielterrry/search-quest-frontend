import axios from 'axios';
import session from '../session';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const tokens = session.getSessionStorage(session.keys.TOKENS);
    if (tokens) {
      const token = tokens.access.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
