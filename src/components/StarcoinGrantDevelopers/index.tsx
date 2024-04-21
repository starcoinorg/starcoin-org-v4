import React from "react";
import "./StarcoinGrantDevelopers.css";

export default function StarcoinGrantDevelopers() {
  return (
    <section className="section section--starcoin-grant-developers">
      <div id="starcoin-grant" className="section__container starcoin-grant-developers__container">
        <div className="section__title">
          <h4>Starcoin <strong>Grant</strong></h4>
          <small>Together we empower developers to build the ecosystem of Starcoin.</small>
        </div>
        <div className="section__content">
          <p>Our goal is to create long-term incentives for open-source developers working on building out the Starcoin ecosystem, 
especially public goods R&D, which are essential to Starcoin’s success. Request funds for your Starcoin project.</p>
          <button className="button button--primary">More</button>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/1920/1024?random=1" alt="" />
      </figure>
    </section>
  );
}
