import React from "react";
import { useNavigate } from "react-router-dom";

const offerRow = (props) => {
  const navigate = useNavigate();

  const routeToOfferUpdateForm = () => navigate("/UpdateOffers");

  return (
    <div>
      {props.company}
      {props.salary}
      {props.bonus}
      {props.equity}
      {props.total_comp}
      {props.start_date}
      <button onClick={routeToOfferUpdateForm}>EDIT</button>
    </div>
  );
};

export default offerRow;
