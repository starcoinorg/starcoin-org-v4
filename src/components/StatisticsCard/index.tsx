import React from "react";
import './StatisticsCard.css';

export default function StatisticsCard() {
  return (
    <div className="card card--statistics">
      <div className="card__title">
        <span>Crazy Affordable</span>
        <span>Rock-Solid Backing</span>
        <span>Huge Growth Prospects</span>
      </div>
      <div className="card__content">
        <dl>
          <dt>AVG COST PER TRANSACTION</dt>
          <dd>$0,000001</dd>
        </dl>
        <dl>
          <dt>Current Hash Rate (Hash/s)</dt>
          <dd>16,069,175</dd>
        </dl>
        <dl>
          <dt>Total Transactions</dt>
          <dd>18,434,267</dd>
        </dl>
        <dl>
          <dt>Target Block Time(s)</dt>
          <dd>3</dd>
        </dl>
      </div>
    </div>
  );
}
