import React, { useEffect } from "react";
import { useUser } from "../CustomHooks/useUser";
import Spinner from "../Component/Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAutheticated, isLoading } = useUser();

  useEffect(
    function () {
      if (!isAutheticated && !isLoading) navigate("/login");
    },
    [isAutheticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner src />
      </FullPage>
    );
  if (isAutheticated) return children;
};

export default ProtectedRoute;
