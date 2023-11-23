import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 6.6rem;
  width: auto;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src="./santorini.png" alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
