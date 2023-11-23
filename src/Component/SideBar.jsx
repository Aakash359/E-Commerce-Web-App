import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: #8d8e8f;
  padding: 3.2rem 2.4rem;
  border-right: 2px solid var(--color-grey-100);
  margin-right: 14%;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const SideBar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default SideBar;
