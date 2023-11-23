import React from "react";
import styled from "styled-components";
import LogOut from "../pages/LogOut";

const StyledHeader = styled.header`
  background-color: #dfdfd0;
  padding: 1.2rem 4.8rem;
  margin-left: -4rem;
  border-bottom: 1px solid var(--color-black-100);
`;
const Header = (props) => {
  const { headerTitle } = props;
  return (
    <StyledHeader>
      {headerTitle}
      <LogOut />
    </StyledHeader>
  );
};

export default Header;
