import React from "react";
import './StarcoinFeatures.css';

import FeatureTable from '@/components/FeatureTable';

export default function StarcoinFeatures() {
  return (
    <section className="section section--starcoin-features">
      <div id="features" className="section__container starcoin-features__container">
        <div className="section__title">
          <h3><strong>Starcoin</strong> Features</h3>
          <small>Innovative Upgrade 2.0. Elevating Your Experience.</small>
        </div>
        <div className="section__content">
          <p>Starcoin, launched in 2020, pioneers the integration of Satoshi Nakamoto's enhanced Proof of Work (PoW) consensus with the secure Move programming language for smart contracts. With the introduction of FlexiDAG and TurboSTM upgrades by 2023, Starcoin 2.0, or "Tempus," marks a significant performance boost. This upgrade underscores Starcoin's commitment to continuous innovation, shaping a secure, efficient, and agile decentralized system for Web3 digital life. Through industry-leading parallelization technology like TurboSTM and Directed Acyclic Graph consensus algorithm FlexiDAG, Starcoin enhances scalability and efficiency, envisioning a decentralized digital ecosystem that empowers users to control assets and transact securely and efficiently.</p>
          <div className="cards cards--features">
              <div className="card">
                <figure className="card__media">
                  <img src="http://i.pravatar.cc/200?img=2" alt="" />
                </figure>
                <div className="card__content">
                  <h4 className="card__title">Enhanced PoW Consensus</h4>
                  <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
                </div>
              </div>
              <div className="card">
                <figure className="card__media">
                  <img src="http://i.pravatar.cc/200?img=2" alt="" />
                </figure>
                <div className="card__content">
                  <h4 className="card__title">Move Smart Contract</h4>
                  <p>Starcoin ensures unparalleled smart contract security by leveraging Move, a language renowned for its resource-oriented programming paradigm and comprehensive security features, revolutionizing the blockchain landscape and providing users with a secure, robust environment.</p>
                </div>
              </div>
          </div>
          <div className="card--parallelization">
            <div className="card__title">High-Performance Parallelization</div>
            <div className="card__content">
              <p>In 2.0 phase, Starcoin achieves a significant transaction performance boost through industry-leading parallelization technology, TurboSTM, increasing transaction processing capacity by 17 times compared to the previous phase, coupled with FlexiDAG, the new Directed Acyclic Graph consensus algorithm, enhancing block generation speed by 10 times, thus enhancing network scalability and efficiency.</p>
              <FeatureTable />
            </div>
          </div> 
        </div>
      
      </div>
    </section>
  );
}
