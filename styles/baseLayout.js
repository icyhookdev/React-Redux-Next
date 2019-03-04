import styled from 'styled-components';

// nav
export const Nav = styled.ul`
  width: 100%;
  list-style: none;
  padding: 2em;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  color: #000;
`;

export const LinkTag = styled.a`
  text-decoration: none;
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-left: 1em;
  padding-bottom: 0.4em;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: #000;
  }
`;

// content

export const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 40%;
  height: 500px;
  margin: 10px;
  padding: 1rem;
  display: inline-block;
  background-size: cover;
  background: #fff;
  position: relative;
  border-radius: 5px;
  transition: all 0.4s ease-out;
  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
  overflow: hidden;
`;

export const MainTitle = styled.h1`
  font-size: 5.8em;
  padding: 1em;
`;

export const SubTitle = styled.h2`
  font-size: 2em;
  padding: 1em;
  color: ${props => props.color || '#000'}
  text-align: ${props => props.align || 'center'};
`;

export const FlexLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkUX = styled.a`
  text-decoration: none;
  font-size: 1.7em;
  margin-right: 1em;
  color: #08aeea;
  cursor: pointer;
`;

export const TextBody = styled.p`
  font-size: 3em;
  font-weight: 100;
  color: #000;
  margin: 0.5em 4em 0 4em;
  padding-left: 1em
  border-left: 5px solid #fff;
`;
