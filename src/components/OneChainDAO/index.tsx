import React from "react";
import './OneChainDAO.css';



export default function OneChainDAO() {
  return (
    <section className="section section--one-chain-dao">
      <div id="one-chain-dao" className="section__container one-chain-dao__container">
        <div className="section__title">
          <small>Starcoin DAO</small>
          <h5>One  chain <strong>DAO</strong></h5>
        </div>
        <div className="section__content">
          <p>Starcoin is a community co-owned native club,
            Supported by sustainable incentives and transparent & verifiable systems.
            Serving stakeholders who can co-build on the future of the DAO.
            Every STC holder can actively engage in on-chain governance,
            leveraging their STC to steer the community towards progress.
          </p>
          <figure>
            <img src="https://picsum.photos/400/400?random=4" alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}
