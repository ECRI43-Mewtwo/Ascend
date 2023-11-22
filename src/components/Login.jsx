import { textAlign } from "@mui/system";
import React from "react";
import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const Login = () => {
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);

    const signUpBody = {
      username,
      password,
    };

    const signUpRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpBody),
    };

    const signup = await fetch("/api/signup", signUpRequest);
    navigate("/homepage");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign up </h1>
      <form onSubmit={signup} style={{ textAlign: "center" }}>
        <Input type='text' name='username' placeholder='Username' />
        <Input type='text' name='password' placeholder='Password' />
        <Button id='signup' type='submit' variant='contained'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Login;
