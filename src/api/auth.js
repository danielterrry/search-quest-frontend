import apiClient from './apiClient';

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('login', error);
  }
};

export const logout = async (refreshToken) => {
  try {
    await apiClient.post('/auth/logout', refreshToken);
  } catch (error) {
    console.error('logout', error);
  }
};

export const register = async (profile) => {
  try {
    const response = await apiClient.post('/auth/register', profile);
    return response.data;
  } catch (error) {
    console.error('register', error);
  }
};
