import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import PropTypes from 'prop-types';

const sizeMap = {
  small: 32,
  medium: 40,
};

const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${Colors.lightGray};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

const IconButton = ({ size = 'medium', children, onClick, ...props }) => {
  return (
    <Container $size={sizeMap[size]} onClick={onClick} {...props}>
      {children}
    </Container>
  );
};

IconButton.propTypes = {
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium'])]),
  children: PropTypes.node.isRequired,
};

export default IconButton;
