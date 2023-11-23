import React from "react";
import { useLogOut } from "../CustomHooks/useLogOut";
import styled from "styled-components";

const LogOut = () => {
  const { logout, isLoading } = useLogOut();
  return (
    <button disabled={isLoading} onClick={logout}>
      Log-Out
    </button>
  );
};

export default LogOut;
