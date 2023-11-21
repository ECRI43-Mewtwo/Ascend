import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataRow = (props) => {
  const navigate = useNavigate();

  const routeToUpdateForm = () => navigate('/UpdateForm');

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
      <button onClick={routeToUpdateForm}>EDIT</button>
    </div>
  );
};

export default dataRow;
