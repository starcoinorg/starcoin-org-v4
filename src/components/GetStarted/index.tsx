import React from "react";
import './GetStarted.css';

export default function GetStarted() {
  return (
    <section className="section--getstarted section">
      <div className="section__container getstarted__container">
        <div className="section__title">
          <h3>Get Started on <strong>tarcoin</strong></h3>
        </div>
        <div className="section__content">
          <ul>
            <li>
              <h4>Easy building<small>Your Launchpad to Move.</small></h4>
              <p>Join us, the PoW consensus pioneers in the Move ecosystem.
Get started with Starcoin, the leading platform for early developers in the Move ecology.</p>
            </li>
            <li>
              <h4>Easy buying<small>Your Simple Gateway.</small></h4>
              <p>Acquire STC Effortlessly at Gate.io, Coinex.
For decentralized options, explore Starswap
for easy trading, staking, farming, and earning yield.</p>
            </li>
            <li>
              <h4>Blazing Block Mining<small>Your lightning-speed experience.</small></h4>
              <p>Unlock the Power of Starcoin's PoW and DAG Structure with Move.
Mine Faster, Earn More, Revolutionize with Blazing Blocks.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
