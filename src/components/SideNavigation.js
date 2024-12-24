import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import { StyledNavLink } from './Navigation';
import breakpoints from '../breakpoints';
import Colors from '../Colors';

const NAVIGATION_WIDTH = '290px';

const Panel = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(${Colors.primary}, ${Colors.secondary});
  transform: translateX(-${NAVIGATION_WIDTH});

  &.panel {
    top: 0;
    left: 0;
    height: 100vh;
    width: ${NAVIGATION_WIDTH};
  }
`;

const Navigation = styled.nav`
  div, ${Panel} {
    transition: all 0.3s ease-in-out;
  }

  .menu {
    ${breakpoints.md} {
      display: none;
    }  
  }

  &.active {
    .menu {
      transform: translateX(${NAVIGATION_WIDTH});
    }

  	${Panel} {
      z-index: 1000;
      visibility: visible;
      transform: translateX(0px);
    }
  }
`;

const SideNavigation = ({ isActive, onClick }) => {
  return (
    <Navigation className={`${isActive ? 'active' : ''}`}>
      <div className='menu' onClick={onClick}>
        <MenuButton aria-label="Toggle menu" />
      </div>
      <Panel className="panel">
        <div className="panel-header">
          header
        </div>
        <div className="panel-body">
          <div class="nav-links">
            <StyledNavLink to="/apply">Apply</StyledNavLink>
          </div>
        </div>
      </Panel>
    </Navigation>
  );
}

export default SideNavigation;