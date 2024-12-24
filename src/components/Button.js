import styled from "styled-components";
import Colors from '../Colors';

const Button = styled.button`
  background-color: ${({ variant }) => variant === "outline" ? Colors.white : Colors.primary};
  color: ${({ variant }) => variant === "outline" ? Colors.primary : Colors.white};
  border: ${({ variant }) => variant === "outline" ? `1px solid ${Colors.primary}` : "0"};
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
    background-color: ${({ variant }) => variant === "outline" ? '#f1accf' : '#bc196a'};
    color: ${Colors.white};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export default Button;
