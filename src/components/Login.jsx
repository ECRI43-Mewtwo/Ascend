import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
  };

  return (
    <div>
      <h1>Login to your profile</h1>
      <form onSubmit={signIn}>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='password' placeholder='Password' />
        <button id='login' type='submit'></button>
      </form>
    </div>
  );
};

export default Login;
