import { styled } from 'styled-components';

export const H1Typography = styled.h1`
  font-size: 3rem;
  line-height: 3.75rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sora-semi-bold;
`;

export const H2Typography = styled.h2`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: sora-semi-bold;
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
