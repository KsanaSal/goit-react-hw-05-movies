import { HiArrowLeft } from 'react-icons/hi';
// import { Link } from "react-router-dom";
// import styled from "styled-components";

import { StyledLink } from './BackButton.styled';

export const BackButton = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
