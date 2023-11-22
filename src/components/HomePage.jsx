import React from 'react';
import NavBar from './NavBar.jsx';
import { useState, useEffect } from 'react';
import DataRow from './DataRow.jsx';

const HomePage = () => {
  const [dropDown, updateDropDown] = useState('');
  const [appData, updateAppData] = useState([]);
  const [copyData, updateCopyData] = useState([]);

  const getAppData = async () => {
    const res = await fetch('/api/getApps');
    const result = await res.json();
    // console.log(result);
    updateAppData(result);
    updateCopyData(result);
    // return result;
  };

  const makeArray = (data) => {
    return data.map((item, index) => (
      <DataRow
        id={item.id}
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
    // console.log('this is the value of dropdown', newStatus);
    updateDropDown(newStatus);
    if (newStatus === 'open') {
      const copyArr = [...appData];
      const filteredData = copyArr.filter((app) => {
        return app.status === newStatus;
      });
      updateCopyData(filteredData);
    }
    if (newStatus === 'interviewed') {
      const copyArr = [...appData];
      const filteredData = copyArr.filter((app) => {
        return app.status === newStatus;
      });
      updateCopyData(filteredData);
    }
    if (newStatus === 'waiting to hear back') {
      const copyArr = [...appData];
      const filteredData = copyArr.filter((app) => {
        return app.status === newStatus;
      });
      updateCopyData(filteredData);
    }
    if (newStatus === 'rejected') {
      const copyArr = [...appData];
      const filteredData = copyArr.filter((app) => {
        return app.status === newStatus;
      });
      updateCopyData(filteredData);
    }
    if (newStatus === 'all') {
      const copyArr = [...appData];
      updateCopyData(copyArr);
    }
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   const newData = await getAppData();
    // };

    // fetchData();
    getAppData();
  }, []);

  // if (data.length === 0) {
  //   return <>No data...</>;
  // }

  return (
    <div style={{
      backgroundImage: "url(https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653105/09d95a6f0e5f6e6a79bcbc58aa1222ad-700.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100vh", // Set the height to 100vh (viewport height)
    }}>
      <NavBar />
      <label htmlFor='Status'>Choose a status:</label>
      <select name='status' id='status' onChange={filterApps}>
        <option value='all'>All Applications</option>
        <option value='open'>Open</option>
        <option value='interviewed'>Interviewed</option>
        <option value='waiting to hear back'>Waiting to Hear Back</option>
        <option value='rejected'>Rejected</option>
      </select>
      {makeArray(copyData)}
      {/* {DataRow} */}
    </div>
  );
};

export default HomePage;
