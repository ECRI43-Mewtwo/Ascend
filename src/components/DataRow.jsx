import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataRow = (props) => {
  const navigate = useNavigate();

  const routeToUpdateForm = (e) => {
    const passedid = e.target.getAttribute('id');
    console.log(passedid);
    navigate('/UpdateForm', { state: { passedid } });
  };

  return (
    <ul
      class='app-box'
      style={{
        border: 'solid',
        backgroundColor: 'whitesmoke',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        wordSpacing: 2,
        listStyle: 'none',
      }}
    >
      <li>{props.date}</li>
      <li>{props.company}</li>
      <li>{props.title}</li>
      <li>{props.location}</li>
      <li>{props.app_type}</li>
      <li>{props.status}</li>
      <li>{props.contact}</li>
      <li>{props.notes}</li>
      <li>{props.referral}</li>
      <li>{props.link}</li>
      <button id={props.id} onClick={routeToUpdateForm}>
        EDIT
      </button>
    </ul>
  );
};

export default dataRow;
