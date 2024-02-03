import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Box from "@mui/material/Box";
import TextInput from "../Component/CustomInput";
import Button from "@mui/material/Button";
import styles from "./login.css";
import { useLogin } from "../CustomHooks/useLogin";
import Logo from "../Component/Logo";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">This field is required!</div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const [id, setID] = useState(0);
  const [email, setEamil] = useState("max@gmail.com");
  const [password, setPassword] = useState("lily@123#");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEamil(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("please enter the login details");
    login({ email, password });
  };

  return (
    <div className="card card-container">
      <label htmlFor="username" className="welcome">
        Welcome to E-Commerce App
      </label>
      <Logo />

      <Form ref={form}>
        <label htmlFor="username" className="signIn">
          Sign-In
        </label>
        <TextInput
          label={"Email"}
          placeholder={"Email"}
          type={"text"}
          value={email}
          onValueChange={onChangeEmail}
          error={emailError}
          disabled={isLoading}
        />
        <TextInput
          label={"Password"}
          type={"password"}
          placeholder={"Type your password"}
          value={password}
          onValueChange={onChangePassword}
          error={passwordError}
          disabled={isLoading}
        />
        <Box ml={23} mt={5}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "orange" }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            {!isLoading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            Login
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default Login;
