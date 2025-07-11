import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './App';
import Landing from './components/Landing';
import LoginForm from './components/forms/LoginForm';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/forms/SignUpForm';
import Profile from './components/Profile';
import ApplyForm from './components/forms/ApplyForm';
import PrivateRoute from './components/PrivateRoute';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="apply" element={<ApplyForm />} />
      <Route path="register" element={<SignUpForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>,
  ),
);
