import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  background-color: #fdfdfd;
  border: 2px solid #200562;
  border-radius: 4px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);

  :hover {
    color: #ff4500;
    background-color: #200562;
  }
`;
