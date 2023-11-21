import React from 'react';
import NavBar from './NavBar.jsx';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [dropdown, updateDropDown] = useState('Open');
  const [appData, updateAppData] = useState([]);
  // GET request
  // cache the GET request
  // useEffect where the page re-renders with applications

  const testData = [
    {
      date: '11/19/23',
      company_name: 'company1',
      job_title: 'front-end engineer',
      location: 'remote',
      type_of_app: 'linkedin',
      status: 'Open',
      contact: '',
      notes: '',
      referral: '',
      link: '',
    },
    {
      date: '11/21/23',
      company_name: 'company2',
      job_title: 'software engineer',
      location: 'remote',
      type_of_app: 'linkedin',
      status: 'Open',
      contact: '',
      notes: '',
      referral: '',
      link: '',
    },
  ];

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
