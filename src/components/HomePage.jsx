import React from 'react';
import NavBar from './NavBar.jsx';
import { useState, useEffect } from 'react';
import DataRow from './DataRow.jsx';

const HomePage = () => {
  const [dropdown, updateDropDown] = useState('');
  const [data, updateData] = useState([]);

  const getAppData = async () => {
    const res = await fetch('/api/getApps');
    const result = await res.json();
    console.log(result);
    return result;
  };

  const makeArray = (data) => {
    return data.map((item, index) => (
      <DataRow
        key={index}
        date={item.date}
        company={item.company}
        title={item.title}
        location={item.location}
        app_type={item.app_type}
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
    const filteredData = data.filter((app) => {
      return app.status === newStatus;
    });
    // console.log('this should be interviewed data only', filteredData);
    updateData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getAppData();
      updateData(newData);
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <>Still loading...</>;
  }

  return (
    <div>
      <NavBar />
      <label htmlFor='Status'>Choose a status:</label>
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
