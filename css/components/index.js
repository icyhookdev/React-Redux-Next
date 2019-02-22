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

export const Card = styled.div`
  width: 300px;
  padding: 1rem;
  background: #f2f2f2;
  border-radius: 5px;
  margin-bottom: 1rem;
  height: 100%;
  text-align: center;
`;

export const Wrapper = styled.ul`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`;

export const BigTittle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 30px;
`;
export const HeaderImg = styled.header`
  width: 100%;
  height: 400px;
  padding: 30px
  background: linear-gradient(19deg, #21d4fd63 0%, #b721ff63 100%),
    url('../../img/posts.jpeg');
`;
