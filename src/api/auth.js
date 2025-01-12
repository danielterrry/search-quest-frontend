import apiClient from './apiClient';

export default {
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.error('login', error);
      return {
        message: error.response?.data?.message,
        status: error.response?.data?.code,
      };
    }
  },

  logout: async (refreshToken) => {
    try {
      await apiClient.post('/auth/logout', refreshToken);
    } catch (error) {
      console.error('logout', error);
    }
  },

  register: async (profile) => {
    try {
      const response = await apiClient.post('/auth/register', profile);
      return response.data;
    } catch (error) {
      console.error('register', error);
    }
  },
};
