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
    updateData(result);
    // return result;
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
    console.log('this is the value of dropdown', newStatus);
    updateDropDown(newStatus);
    const filteredData = data.filter((app) => {
      console.log(app.status, newStatus);
      return app.status === newStatus;
    });
    // console.log('this should be interviewed data only', filteredData);
    updateData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getAppData();
    };

    fetchData();
  }, []);

  // if (data.length === 0) {
  //   return <>No data...</>;
  // }

  return (
    <div>
      <NavBar />
      <label htmlFor='Status'>Choose a status:</label>
      <select name='status' id='status' onChange={filterApps}>
        <option value='open'>Open</option>
        <option value='interviewed'>Interviewed</option>
        <option value='waiting to Hear Back'>Waiting to Hear Back</option>
        <option value='rejected'>Rejected</option>
      </select>
      {makeArray(data)}
    </div>
  );
};

export default HomePage;
