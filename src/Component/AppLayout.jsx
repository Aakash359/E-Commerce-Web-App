import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";
import { Strings } from "../Constants/Strings";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: #efeeee;
  padding: 4rem 4.8rem 6.4rem;
  margin-left: -3rem;
`;

const AppLayout = () => {
  const { HOME } = Strings;
  return (
    <StyledAppLayout>
      <Header headerTitle={HOME} />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
