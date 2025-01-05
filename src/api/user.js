import apiClient from './apiClient';

export const getUser = async (id) => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('getUser', error);
  }
};
