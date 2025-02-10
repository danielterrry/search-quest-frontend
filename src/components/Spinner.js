import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

const Svg = styled.svg`
  width: 32px;
  height: 32px;
  animation: rotate 0.6s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <Svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={Colors.primary}
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </Svg>
  );
};

export default Spinner;
