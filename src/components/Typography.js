import { styled } from 'styled-components';

export const H1Typography = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const H2Typography = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const TitleH1 = ({ className, id, children }) => {
  return (
    <H1Typography className={className} id={id}>
      {children}
    </H1Typography>
  );
};

export const TitleH2 = ({ className, id, children }) => {
  return (
    <H2Typography className={className} id={id}>
      {children}
    </H2Typography>
  );
};
