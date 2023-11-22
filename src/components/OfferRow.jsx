import React from "react";
import { useNavigate } from "react-router-dom";

const offerRow = (props) => {
  const navigate = useNavigate();

  const routeToOfferUpdateForm = (e) => {
    const passedcompany = e.target.getAttribute("id");
    console.log(passedcompany);
    navigate("/UpdateOffers", { state: { passedcompany } });
  };
  return (
    <div>
      {props.company}
      {props.salary}
      {props.bonus}
      {props.equity}
      {props.total_comp}
      {props.start_date}
      <button id={props.company} onClick={routeToOfferUpdateForm}>
        EDIT
      </button>
    </div>
  );
};

export default offerRow;
