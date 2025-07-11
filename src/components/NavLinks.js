import LogoutButton from './LogoutButton';
import { StyledNavLink } from './Navigation';

const NavLinks = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <>
          <StyledNavLink to="/dashboard">Home</StyledNavLink>
          <StyledNavLink to="/profile">Profile</StyledNavLink>
        </>
      ) : (
        <StyledNavLink to="/login">Login</StyledNavLink>
      )}
      <StyledNavLink to="/apply">Apply</StyledNavLink>
      {isAuthenticated && <LogoutButton />}
    </>
  );
};

export default NavLinks;
