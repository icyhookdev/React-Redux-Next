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

export const Card = styled.li`
  flex-basic: 49%;
  padding: 1rem;
  background: #f2f2f2;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const Wrapper = styled.ul`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

// export const Header = styled.header`

// `;
