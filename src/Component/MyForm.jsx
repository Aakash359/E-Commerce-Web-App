import React, { useRef } from "react";
import Form from "react-validation/build/form";
import TextInput from "../Component/CustomInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addUserSlice, editUserSlice } from "../Redux/slice/users";
import { setUserSlice } from "../Redux/slice/user";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../Redux/types";

const StyledDiv = styled.header`
  margin-left: -5rem;
  padding: 1px;
`;

const MyForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onhandleChange = (props) => (event) => {
    dispatch(setUserSlice({ ...user, [props]: event.target.value }));
  };

  const handleSubmit = () => {
    // user.id == 0
    //   ? dispatch(addUserSlice({ ...user, id: nanoid(8) }))
    //   : dispatch(editUserSlice(user));
    user.id === 0
      ? dispatch({
          type: CREATE_USER,
          user: {
            ...user,
            id: nanoid(8),
          },
        })
      : dispatch({ type: UPDATE_USER_BY_ID, user });
    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };

  return (
    <StyledDiv>
      <Form ref={form}>
        <TextInput
          label={"Enter Name"}
          placeholder={"Enter name"}
          type={"text"}
          value={user.name}
          onValueChange={onhandleChange("name")}
        />
        <TextInput
          label={"Enter Email"}
          placeholder={"Enter email"}
          type={"text"}
          value={user.email}
          onValueChange={onhandleChange("email")}
        />
        <TextInput
          label={"Password"}
          type={"password"}
          placeholder={"Enter password"}
          value={user.password}
          onValueChange={onhandleChange("password")}
        />
        <Box ml={23} mt={5}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "orange" }}
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </StyledDiv>
  );
};

export default MyForm;
