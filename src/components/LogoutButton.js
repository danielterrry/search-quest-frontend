import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import IconButton from './IconButton';

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

  return (
    <IconButton onClick={handleLogout}>
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;
