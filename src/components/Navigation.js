import { styled } from 'styled-components';
import Colors from '../Colors';
import breakpoints from '../breakpoints';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import SideNavigation from './SideNavigation';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LogoutButton from './LogoutButton';
import NavLinks from './NavLinks';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const NavItems = styled.ul`
  display: none;
  align-items: center;
  gap: 1rem;
  list-style: none;

  ${breakpoints.md} {
    display: flex;
  }
`;

const NavList = styled.li`
  display: block;
`;

export const StyledNavLink = styled(NavLink)`
  color: #000000;
  text-overflow: ellipsis;
  text-decoration: none;
  white-space: nowrap;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    color: ${Colors.white};
    background: ${Colors.primary};
  }
`;

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
  const { isAuthenticated } = useAuth();

  return (
    <Nav className="container">
      <SideNavigation isActive={isActive} onClick={handleClick} />
      <a
        href="/"
        style={{ width: '180px', height: '50px', marginRight: '1.5rem' }}
      >
        <Logo />
      </a>
      <NavItems className="nav-items" role="menu">
        <NavList>
          <NavLinks isAuthenticated={isAuthenticated} />
        </NavList>
      </NavItems>
    </Nav>
  );
};

export default Navigation;
