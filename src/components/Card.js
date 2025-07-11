import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { H2Typography } from './Typography';

const Container = styled.div`
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '500px')};
  border-radius: 0.25rem;
  overflow: hidden;
  border: 1px solid ${Colors.lightGray};
  background-color: #ffffff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const Card = ({ className, fullWidth, title, imageUrl, children }) => {
  return (
    <Container className={className} fullWidth={fullWidth}>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardContent>
        <H2Typography>{title}</H2Typography>
        {children}
      </CardContent>
    </Container>
  );
};

export default Card;
