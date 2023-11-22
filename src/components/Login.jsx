import { textAlign } from "@mui/system";
import React from "react";
import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { red } from "@mui/material/colors";

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
    navigate("/Home");
  };

  return (
    <div 
    style={{
      backgroundImage: "url(https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100vh", // Set the height to 100vh (viewport height)
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
    
    }}
    >
      <div
      style={{
        backgroundColor: "#1976D2", // Set the background color of the navbar
        textAlign: "center",
        color: "#ffffff", // Set text color to white for better visibility
        width: "100%",
        fontFamily: "sans-serif",
        alignItems: "center"
      }}
    >
      <h1 style={{margin: "5px"}}>Ascend</h1>
      <h3 style={{margin: "5px", fontSize:"15px"}}>Level up your job search</h3>
    </div>
      <h1 style={{ textAlign: "center", fontFamily:"sans-serif" }}>Sign up </h1>
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
