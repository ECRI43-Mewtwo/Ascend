import React from 'react';
import { useNavigate } from 'react-router-dom';

const dataRow = (props) => {
  const navigate = useNavigate();

  const routeToUpdateForm = () => navigate('/UpdateForm');

  return (
    <div>
      {props.date}
      {props.company_name}
      {props.job_title}
      {props.location}
      {props.type_of_app}
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
