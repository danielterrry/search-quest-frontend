export default {
  keys: {
    ID: 'id',
    TOKENS: 'tokens',
    PROFILE: 'profile',
  },

  getSessionStorage: (key) => {
    const value = window.sessionStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  },

  setSessionStorage: (key, value) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  },

  clearSessionStorage: (key) => {
    try {
      window.sessionStorage.clear(key);
    } catch (error) {
      console.error(error);
    }
  },
};
