import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import session from '../session';

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

  useEffect(() => {
    if (tokens && tokens.access.token) {
      setIsAuthenticated(true);
      session.setSessionStorage(TOKENS_KEY, tokens);
    }
    if (profile) {
      session.setSessionStorage(PROFILE_KEY, profile);
    }
  }, [tokens]);

  const clearAuth = () => {
    setIsAuthenticated(false);
    setTokens(null);
    setProfile(null);
    session.clearSessionStorage(PROFILE_KEY);
    session.clearSessionStorage(TOKENS_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        profile,
        setProfile,
        tokens,
        setTokens,
        clearAuth,
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
