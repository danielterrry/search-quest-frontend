import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';

const LogoutButton = () => {
  const { logout, tokens } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout({
      refreshToken: tokens.refresh.token,
    });

    if (success) {
      navigate('/');
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
