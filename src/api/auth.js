import apiClient from './apiClient';

export default {
  login: async (payload) => {
    try {
      const response = await apiClient.post('/auth/login', payload);
      return response.data;
    } catch (error) {
      console.error('login', error);
      return error.response;
    }
  },

  logout: async (payload) => {
    try {
      await apiClient.post('/auth/logout', payload);
    } catch (error) {
      console.error('logout', error);
      return error.response;
    }
  },

  register: async (payload) => {
    try {
      const response = await apiClient.post('/auth/register', payload);
      return response.data;
    } catch (error) {
      console.error('register', error);
      return error.response;
    }
  },
};
