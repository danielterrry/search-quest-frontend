import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './App';
import Landing from './components/Landing';
import Apply from './components/Apply';
import LoginForm from './components/forms/LoginForm';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/forms/SignUpForm';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="apply" element={<Apply />} />
      <Route path="register" element={<SignUpForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>,
  ),
);
