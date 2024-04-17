import React from "react";
import "./StarcoinRoadmap.css";

export default function StarcoinRoadmap() {
  return (
    <section className="section section--starcoin-roadmap">
      <div className="section__container starcoin-roadmap__container">
        <div className="section__title">
          Starcoin <strong>Roadmap</strong>
        </div>
        <div className="section__content">
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__time">2018-2020</div>
              <div className="timeline__title">Foundations and Launch</div>
              <div className="timeline__content">
                <ul>
                  <li>
                    <strong>End of 2018</strong>: Publication of the first
                    Starcoin whitepaper, laying the foundation for a scalable
                    blockchain.
                  </li>
                  <li>
                    <strong>2019-2020</strong>: Key developments including the
                    adoption of the Move language (Q4 2019) and the release of
                    Starcoin v0.1 (April 9, 2020).
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__time">2021</div>
              <div className="timeline__title">Milestones</div>
              <div className="timeline__content">
                <ul>
                  <li>
                    <strong>March 27, 2021</strong>: Release of Starcoin
                    v1.0.0.beta.
                  </li>
                  <li>
                    <strong>May 18, 2021</strong>: Launch of the Starcoin
                    mainnet.
                  </li>
                  <li>
                    <strong>June 24, 2021</strong>: Introduction of the first
                    Move Dapp and on-chain governance DAO.
                  </li>
                  <li>
                    <strong>September 2021</strong>: Release of the Starcoin NFT
                    spec and the launch of Cyberrare, the first NFT marketplace.
                  </li>
                </ul>
              </div>
            </div>


            <div className="timeline__item">
              <div className="timeline__time">2022</div>
              <div className="timeline__title">Ecosystem Practices</div>
              <div className="timeline__content">
                <ul>
                <li><strong>January 2022</strong>: Launch of Arm Wrest War (AWW), a Play 2 Earn game.</li>
<li><strong>March 2022</strong>: Introduction of FAI, a stablecoin protocol by Bfly Finance; launch of Starswap, a general-purpose DEX; and implementation of Fai Liquidation.</li>
<li><strong>April 2022</strong>: Establishment of the first cross-chain bridge connecting Starcoin and Ethereum; launch of Bfly, an algorithmic currency protocol.</li>
<li><strong>July 2022</strong>: Launch of the first Lending Protocol, fly, on the mainnet.</li>
<li><strong>Q3-Q4 2022</strong>: Developments in DAO & governance, Layer1 & Layer 2 infrastructure, and the Move ecosystem.</li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__time">2023</div>
              <div className="timeline__title">Innovating for the Future</div>
              <div className="timeline__content">
                <p>Enhancing PoW consensus</p>
                <ul>
                <li>PoW consensus algorithm improvement strengthens consensus security.</li>
<li>Parallel-Chain Architecture</li>
<li>Economic Proof of Work</li>
                </ul>
                <p>Increasing transaction performance</p>
                <ul>
                
<li>We are increasing Layer 1 TPS by transaction parallel execution, etc.</li>
<li>P2P network optimization improves network performance (e.g., RPC optimization, scoring mechanism).</li>
<li>Network hole punching</li>
<li>Support QUIC protocol for performance</li>
<li>Light node, implemented as web assembly</li>
<li>RPC on p2p network</li>
<li>Incentive on p2p network</li>
                </ul>
                <p>Lowering validator threshold</p>
                <ul>
                
<li>Provide offline import and export block function, and improve block import speed.</li>
<li>Provide offline import and export snapshot data function and export support incremental export.</li>
<li>Provide asynchronous write and batch read interfaces to improve DB read and write speed.</li>
<li>Optimize accumulator write speed, and improve online synchronization block speed.</li>
<li>Provide snapshot sync on p2p and block WriteSet sync</li>
<li>Provide prune uncle block decrease storage size</li>
                </ul>
                <p>Improving the application development environment</p>
                <ul>
                
<li>Introducing and supporting new features of Move.</li>
<li>Provide U256 type to improve the convenience of dapp development.</li>
<li>Cookbook improvement to help developers quickly understand Starcoin development.</li>
<li>Using local node accounts to deploy contracts in remote nodes, facilitating developers to deploy mpm quickly provides integration test function, and mpm integration test provides custom parameters and deploys function, which is convenient for dapp developers to test.</li>
<li>Provide useful move data struct like HashMap and BigVector to improve the convenience of dapp development.</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
