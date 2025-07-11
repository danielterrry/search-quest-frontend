import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { tokens } = useAuth();

  if (!tokens) return null;

  return tokens.access.token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
