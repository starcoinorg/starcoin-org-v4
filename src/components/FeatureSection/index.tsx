import React from "react";
import './FeatureSection.css';

export default function FeatureSection() {
  return (
   <section className="section section--feature">
    <div className="section__container feature__container">
      <div className="section__title">Features</div>
      <div className="section__content">
        <p>Starcoin offers a reliable and future-proof blockchain solution that addresses the evolving needs of the digital economy.</p>
        <div className="cards cards--feacures">
          <div className="card">
            <h4 className="card__title">
            Enhanced PoW Consensus
            </h4>
            <div className="card__content">
            <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>

            </div>
          </div>
          <div className="card">
            <h4 className="card__title">
            Move Smart Contract
            </h4>
            <div className="card__content">
            <p>Starcoin ensures unparalleled smart contract security by leveraging Move, a language renowned for its resource-oriented programming paradigm and comprehensive security features, revolutionizing the blockchain landscape and providing users with a secure, robust environment.</p>
            </div>

          </div>
          <div className="card">
            <h4 className="card__title">High-Performance Parallelization</h4>
            <div className="card__content">
              <p>Starcoin ensures unparalleled smart contract security by leveraging Move, a language renowned for its resource-oriented programming paradigm and comprehensive security features, revolutionizing the blockchain landscape and providing users with a secure, robust environment.</p>
              <div className="sub-cards sub-cards--features">
                <div className="sub-card">
                  <h5 className="sub-card__title">FlexiDAG</h5>
                  <figure className="sbu-card__media">
                    <img src="http://i.pravatar.cc/500?img=1" alt="" />
                  </figure>
                  <div className="sub-card__content">
                    <p>Balancing Parallel Processing and Security</p>
                    <ul>
                      <li>Parallel Block Creation: Allows multiple miners to make blocks simultaneously, boosting network efficiency.</li>
                      <li>Dynamic Block Adjustments: Tweaks block speed and size as needed for better security and user experience.</li>
                      <li>Community Control: Lets the community change consensus settings through governance and upgrades.</li>
                      <li>Simultaneous Block Addition: Adds all valid blocks to the blockchain at once, eliminating delays.</li>
                      <li>DAG Transformation: Shifts from a chain to a DAG structure, solving issues like block confirmation and security.</li>
                    </ul>
                  </div>
                </div>

                <div className="sub-card">
                  <h5 className="sub-card__title">TurboSTM</h5>
                  <figure className="sbu-card__media">
                    <img src="http://i.pravatar.cc/500?img=3" alt="" />
                  </figure>
                  <div className="sub-card__content">
                    <p>Reshaping the Execution of Smart Contracts</p>
                    <ul>
                      <li>Multi-threaded Execution: TurboSTM employs a high-performance, multi-threaded in-memory computing engine, allowing simultaneous execution of multiple transactions.</li>
                      <li>MVCC and OCC: Utilizes Multi-Version Concurrency Control (MVCC) and optimistic concurrency control (OCC) for synchronous data reading and updates, reducing bottlenecks.</li>
                      <li>Executor Module: Responsible for executing transactions and handling transactional information.</li>
                      <li>Storage Module: Stores transaction information and execution results.</li>
                      <li>MoveVM Module: Executes Move code, computes execution results, and identifies resource modifications.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}
