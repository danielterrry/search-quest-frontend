import { styled } from 'styled-components';
import Colors from '../Colors';
import PropTypes from 'prop-types';

const pillColors = {
  pink: { background: Colors.pink, text: '#932c4f' },
  blue: { background: Colors.blue, text: '#317a95' },
  green: { background: Colors.green, text: '#3c8c70' },
  purple: { background: Colors.purple, text: '#8b6bba' },
};

const Button = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: ${Colors.lightBlue};
  background: ${({ colorScheme }) => pillColors[colorScheme].background};
  color: ${({ colorScheme }) => pillColors[colorScheme].text};
  font-size: 1rem;
  font-style: normal;
  font-family: 'sora-semi-bold';
  line-height: 14px;
`;

const Pill = ({ id, text, onClick, colorScheme = 'green' }) => {
  return (
    <Button id={id} onClick={onClick} colorScheme={colorScheme}>
      {text}
    </Button>
  );
};

Pill.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  colorScheme: PropTypes.oneOf(['pink', 'blue', 'green', 'purple']),
};

export default Pill;
