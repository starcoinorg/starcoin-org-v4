import React from "react";
import './NodeMining.css';



export default function NodeMining() {
  return (
    <section className="section section--node-mining">
      <div id="node-mining" className="node-mining__container section__container">
        <div className="section__title">
          <h4>Node <strong>Mining</strong></h4>
          <p>Unlock STC rewards by safeguarding the network and validating transactions through mining to nodes or pools.</p>
        </div>
        <div className="section__content">
          <div className="mining__data">
            <ul>
              <li>
                <h5>Epoch Start Time</h5>
                <p>1 minute ago</p>
              </li>
              <li>
                <h5>Target Block Time(s)</h5>
                <p>5</p>
              </li>
              <li>
                <h5>Current Hash Rate(H/s)</h5>
                <p>45,870,608 </p>
              </li>
              <li>
                <h5>Block per second</h5>
                <p>0.2</p>
              </li>
              <li>
                <h5>Start - End Block</h5>
                <p>16,138,560 - 16,138,800 </p>
              </li>
              <li>
                <h5>Block Reward</h5>
                <p>5</p>
              </li>
            </ul>
          </div>
          <div className="mining__des">
            <p>Starcoin is the only proof-of-work (PoW) blockchain that utilizes the Move programming language and is coupled with the support for parallel block production through a Directed Acyclic Graph (DAG) structure.</p>

            <p>The mining of starcoin based on the CryptoNight-RS algorithm, a variant of the CryptoNight algorithm, which is known for its democratic mining features. This algorithm is designed to be fair and accessible, ensuring that a wide range of participants, including those with less powerful hardware, can contribute to the network's security and consensus. Starcoin supports a broad spectrum of mining hardware, including CPUs, GPUs, and ASICs. This inclusive approach to mining hardware compatibility makes it accessible for various miners, from hobbyists with basic equipment to more advanced miners with specialized hardware. This diversity in mining participation helps in maintaining the decentralized nature of the blockchain, ensuring that no single group holds too much control over the network.</p>
          </div>
          <div className="cards cards--mining">
            <figure>
              <img src="https://picsum.photos/1024/186?random=4" alt="" />
            </figure>
            <div className="card">
              <div className="card__media">
                <svg>
                  <use xlinkHref="#card9" href="#card9" />
                </svg>
                <h5>CEX</h5>
              </div>
              <div className="card__content">
                <p>Effortlessly acquire STC by purchasing it from reputable centralized exchanges like <a href="#">Gate.io</a> and <a href="#">Coinex</a>.</p>
              </div>
            </div>
            <div className="card">
              <div className="card__media">
                <svg>
                  <use xlinkHref="#card10" href="#card10" />
                </svg>
                <h5>DEX</h5>
              </div>
              <div className="card__content">
                <p>Engage in trading, staking, farming, and earning yields on <a href="#">Starswap</a>, the decentralized exchange powered by Starcoin!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
