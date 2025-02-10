import apiClient from './apiClient';

export default {
  getUser: async (id) => {
    try {
      const response = await apiClient.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('getUser', error);
    }
  },

  getUsers: async () => {
    try {
      const response = await apiClient.get(`/users`);
      return response.data;
    } catch (error) {
      console.error('getUsers', error);
      return error.response;
    }
  },

  updateUser: async (payload) => {
    const { id, ...data } = payload;
    try {
      const response = await apiClient.patch(`/users/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('updateUser', error);
    }
  },
};
