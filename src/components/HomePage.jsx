import React from 'react';
import NavBar from './NavBar.jsx';
import { useState, useEffect } from 'react';
import DataRow from './DataRow.jsx';

const HomePage = () => {
  const [dropdown, updateDropDown] = useState('Open');
  const [data, updateData] = useState([]);

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
    {
      date: '11/21/23',
      company_name: 'company3',
      job_title: 'software engineer',
      location: 'remote',
      type_of_app: 'linkedin',
      status: 'Interviewed',
      contact: '',
      notes: '',
      referral: '',
      link: '',
    },
  ];

  const makeArray = (data) => {
    return data.map((item, index) => (
      <DataRow
        key={index}
        date={item.date}
        company_name={item.company_name}
        job_title={item.job_title}
        location={item.location}
        type_of_app={item.type_of_app}
        status={item.status}
        contact={item.contact}
        notes={item.notes}
        referral={item.referral}
        link={item.link}
      />
    ));
  };

  const filterApps = () => {
    const newStatus = document.querySelector('#status').value;
    updateDropDown(newStatus);
    const filteredData = testData.filter((app) => {
      return app.status === newStatus;
    });
    console.log('this should be interviewed data only', filteredData);
    updateData(filteredData);
  };

  useEffect(() => {
    updateData(testData);
  }, []);

  // GET request
  // cache the GET request
  // useEffect where the page re-renders with applications

  return (
    <div>
      <NavBar />
      <label for='Status'>Choose a status:</label>
      <select name='status' id='status' onChange={filterApps}>
        <option value='Open'>Open</option>
        <option value='Interviewed'>Interviewed</option>
        <option value='Waiting to Hear Back'>Waiting to Hear Back</option>
        <option value='Rejected'>Rejected</option>
      </select>
      {makeArray(data)}
    </div>
  );
};

export default HomePage;
