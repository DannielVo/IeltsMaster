import React from "react";
import "./counterReview.css";

const CounterReview = () => {
  return (
    <div className="counter-review">
      <h2>Overview of Ielts Master</h2>
      <div className="counter-boxes">
        <div className="box">
          <div className="counter-value">532000</div>
          <div className="counter-name">Learners</div>
        </div>

        <div className="box">
          <div className="counter-value">532000</div>
          <div className="counter-name">Contributors</div>
        </div>

        <div className="box">
          <div className="counter-value">2025</div>
          <div className="counter-name">Founded</div>
        </div>
      </div>
    </div>
  );
};

export default CounterReview;
