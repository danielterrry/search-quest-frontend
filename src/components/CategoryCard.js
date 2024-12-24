import styled from 'styled-components';
import Colors from '../Colors';

const Container = styled.div`
  background: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 218px;
  position: relative;
  border: 1px solid ${Colors.darkGray};
  width: auto;
  padding: 1rem;
  border-radius: 16px;
`;

const CategoryCard = ({ children }) => {
  return (
    <Container>{children}</Container>
  )
};

export default CategoryCard;
