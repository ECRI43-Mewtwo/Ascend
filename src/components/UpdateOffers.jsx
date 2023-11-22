import React from "react";
import NavBar from "./NavBar.jsx";
import { useLocation } from "react-router-dom";

const UpdateOffers = () => {
  const { state } = useLocation();
  console.log(state);

  const updatingOffers = (e) => {
    e.preventDefault();
    const company = e.target.offercompany.value;
    const salary = e.target.offersalary.value;
    const bonus = e.target.offerbonus.value;
    const equity = e.target.offerequity.value;
    const totalComp = e.target.offertotalcomp.value;
    const startDate = e.target.offerstartdate.value;

    console.log(startDate);
    console.log(e.target.offerstartdate);
    console.log(e.target);

    async function putOffer() {
      const body = { company, salary, bonus, equity, totalComp, startDate };
      const reqBody = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      await fetch("/api/updateOffer", reqBody);
    }
    putOffer();
  };

  return (
    <div>
      <NavBar />
      Update Your Offers
      <form onSubmit={updatingOffers}>
        <label htmlFor='offercompany'>Company: </label>
        <input
          type='text'
          name='offercompany'
          id='offercompany'
          value={state.passedcompany}
        />
        <br></br>
        <label htmlFor='offersalary'>Salary</label>
        <input type='number' name='offersalary' id='offersalary' />
        <br></br>
        <label htmlFor='offerbonus'>Bonus</label>
        <input type='number' name='offerbonus' id='offerbonus' />
        <br></br>
        <label htmlFor='offerequity'>Equity</label>
        <input type='number' name='offerequity' id='offerequity' />
        <br></br>
        <label htmlFor='offertotalcomp'>Total Comp</label>
        <input type='number' name='offertotalcomp' id='offertotalcomp' />
        <br></br>
        <label htmlFor='offerstartdate'>Start Date</label>
        <input type='date' name='offerstartdate' id='offerstartdate' />
        <br></br>
        <button id='submit-app' type='submit'></button>
      </form>
    </div>
  );
};
export default UpdateOffers;
