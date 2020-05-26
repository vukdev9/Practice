import React from "react";
import "./DoubleGrid.css";

const DoubleGrid = () => {
  return (
    <div className="row justify-content-center doubleGrid">
      <img
        className="col-5"
        src="https://static.tehnomanija.rs/UserFiles/banners/25_23381.jpg"
        alt="..."
      />
      <img
        className="col-5"
        src="https://static.tehnomanija.rs/UserFiles/banners/25_21233.jpg"
        alt="..."
      />
    </div>
  );
};

export default DoubleGrid;
