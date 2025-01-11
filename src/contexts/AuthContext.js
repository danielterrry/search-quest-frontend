import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import session from '../session';
import auth from '../api/auth';

const TOKENS_KEY = session.keys.TOKENS;
const PROFILE_KEY = session.keys.PROFILE;

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
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
      const result = await auth.login(values);
      const { tokens, user } = result;
      return initialiseSession(tokens, user) || result.message;
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
      const result = await auth.register(values);
      const { tokens, user } = result;
      return initialiseSession(tokens, user) || true;
    } catch (error) {
      console.error('register failed:', error);
      return false;
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
  }, [tokens]);

  return (
    <AuthContext.Provider
      value={{
        login,
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
