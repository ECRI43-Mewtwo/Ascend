import React from 'react';
import NavBar from './NavBar.jsx';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [dropdown, updateDropDown] = useState('Open');

  // GET request
  // cache the GET request
  // useEffect where the page re-renders with applications

  return (
    <div>
      <NavBar />
      <label for='Status'>Choose a status:</label>
      <select name='status' id='status'>
        <option value='Open'>Open</option>
        <option value='Interviewed'>Interviewed</option>
        <option value='Waiting to Hear Back'>Waiting to Hear Back</option>
        <option value='Rejected'>Rejected</option>
      </select>
    </div>
  );
};

export default HomePage;
