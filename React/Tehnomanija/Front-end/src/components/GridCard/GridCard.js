import React from "react";
import "./GridCard.css";

const GrdiCard = (props) => {
  return (
    <div
      className="card col-lg-2 col-md-4  gridCard"
      style={{ width: "18rem" }}
    >
      <img src={props.image} className="card-img-top image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
        <a href="https://kls.rs" className="btn btn-primary">
          Vidi Ponudu
        </a>
      </div>
    </div>
  );
};

export default GrdiCard;
