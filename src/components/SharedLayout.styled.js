import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 20px;
  margin-bottom: 16px;
  box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
  /* border-bottom: 1px solid black; */

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
