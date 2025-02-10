import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import session from '../session';
import auth from '../api/auth';
import user from '../api/user';

const TOKENS_KEY = session.keys.TOKENS;
const PROFILE_KEY = session.keys.PROFILE;

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(() => {
    return session.getSessionStorage(PROFILE_KEY) || null;
  });
  const [tokens, setTokens] = useState(() => {
    return session.getSessionStorage(TOKENS_KEY) || null;
  });

  const initialiseSession = (tokens, user) => {
    if (tokens?.access?.token && tokens?.refresh?.token) {
      setProfile(user);
      setTokens(tokens);
      return true;
    }
    return false;
  };

  const login = async (values) => {
    try {
      const response = await auth.login(values);
      const { tokens, user, data } = response;
      return initialiseSession(tokens, user) || data?.message;
    } catch (error) {
      console.error('login failed', error);
      return false;
    }
  };

  const logout = async (refreshToken) => {
    try {
      await auth.logout(refreshToken);
      setIsAuthenticated(false);
      setTokens(null);
      setProfile(null);
      session.clearSessionStorage(PROFILE_KEY);
      session.clearSessionStorage(TOKENS_KEY);
      return true;
    } catch (error) {
      console.error('logout failed:', error);
      return false;
    }
  };

  const register = async (values) => {
    try {
      const response = await auth.register(values);
      const { tokens, user } = response;
      return initialiseSession(tokens, user) || true;
    } catch (error) {
      console.error('register user failed:', error);
      return false;
    }
  };

  const update = async (values) => {
    try {
      setIsLoading(true);
      const response = await user.updateUser({
        id: values.id,
        ...values,
      });

      setProfile(response);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return true;
    } catch (error) {
      console.error('update user failed:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tokens !== null) {
      if (tokens.access.token && tokens.refresh.token) {
        setIsAuthenticated(true);
        session.setSessionStorage(TOKENS_KEY, tokens);
      }
      if (profile) {
        session.setSessionStorage(PROFILE_KEY, profile);
      }
    }
  }, [tokens, profile]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        login,
        update,
        logout,
        register,
        isAuthenticated,
        profile,
        tokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('useAuth must be used within an AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
