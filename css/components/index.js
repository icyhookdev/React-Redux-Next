import styled from 'styled-components';

export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${props => props.TextColor || 'black'};
`;

export const Paragraph = styled.p`
  text-align: left;
  font-size: 1.05rem;
  font-weight: 100;
  color: ${props => props.TextColor || 'black'};
`;
