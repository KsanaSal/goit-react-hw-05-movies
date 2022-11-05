import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  padding: 8px;
`;

export const Container = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 2px solid #f1f1f1;
`;

export const PosterPath = styled.img`
  width: 300px;
`;

export const ContentMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  padding: 8px;
`;

export const CaptionMovie = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: #ff4500;
  }

  :hover {
    text-shadow: 5px 3px 5px rgba(32, 5, 98, 0.4);
  }
`;

export const ListCardInform = styled.ul`
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 16px;

  & li{
    padding: 8px 0;
  }
`;
