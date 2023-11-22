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
    <div>
      {props.date}
      {props.company}
      {props.title}
      {props.location}
      {props.app_type}
      {props.status}
      {props.contact}
      {props.notes}
      {props.referral}
      {props.link}
      <button id={props.id} onClick={routeToUpdateForm}>
        EDIT
      </button>
    </div>
  );
};

export default dataRow;
