import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    // console.log(username, password);

    const signUpBody = {
      username,
      password,
    };

    const signUpRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signUpBody),
    };

    // const signup = await fetch('/api/signup', signUpRequest);
    navigate('/homepage');
  };

  return (
    <div>
      <h1>Sign up </h1>
      <form onSubmit={signup}>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='password' placeholder='Password' />
        <button id='signup' type='submit'></button>
      </form>
    </div>
  );
};

export default Login;
