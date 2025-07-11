import styled from 'styled-components';
import Colors from '../Colors';

const Button = styled.button`
  background-color: ${({ variant }) =>
    variant === 'outline' ? Colors.white : Colors.primary};
  color: ${({ variant }) =>
    variant === 'outline' ? Colors.primary : Colors.white};
  border: ${({ variant }) =>
    variant === 'outline' ? `1px solid ${Colors.primary}` : '0'};
  height: 40px;
  border-radius: 8px;
  outline: 0;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  font-family: sora-semi-bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'outline' ? '#ad8fff' : '#9e84e6'};
    color: ${Colors.white};
  }

  &:disabled {
    background-color: #f6f6f6;
    color: #9ca0a6;
    border: 1px solid #f6f6f6;
    cursor: not-allowed;
  }
`;

export default Button;
