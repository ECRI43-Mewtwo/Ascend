import React from "react";
import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";
import OfferRow from "./OfferRow.jsx";

const Offers = () => {
  const [offerData, updateOfferData] = useState([]);

  const getOfferData = async () => {
    const res = await fetch("/api/getOffers");
    const result = await res.json();
    return result;
  };

  const makeOfferArray = (data) => {
    return data.map((item, index) => (
      <OfferRow
        key={index}
        company={item.company}
        salary={item.salary}
        bonus={item.bonus}
        equity={item.equity}
        total_comp={item.total_comp}
        start_date={item.start_date}
      />
    ));
  };
  useEffect(() => {
    const fetchData = async () => {
      const newData = await getOfferData();
      updateOfferData(newData);
    };

    fetchData();
  }, []);

  if (offerData.length === 0) {
    return <>No results found...</>;
  }

  return (
    <div>
      <NavBar />
      {makeOfferArray(offerData)}
    </div>
  );
};
export default Offers;
