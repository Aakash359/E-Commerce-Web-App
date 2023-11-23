import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";
import { FcManager } from "react-icons/fc";
const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.8rem;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:link &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 900;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: #ccccd2;
    border-radius: var(--border-radius-10m);
  }

  & svg {
    width: 3.4rem;
    height: 3.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active,
  svg &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-600);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/home">
            <HiOutlineHome />
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">
            <FcManager />
            Profile
          </StyledLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
