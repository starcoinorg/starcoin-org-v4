import React from "react";
import './FeaturesPageHero.css';

export default function FeaturesPageHero() {
  return (
    <section className="hero hero--features">
      <div className="hero--container">
        <h2 className="hero__title">
          <p>A Reliable, Flexible, and Progressible</p>
          <p>
          Web3 <strong>Infrastructure</strong>
          </p>
        </h2>
        <div className="hero__content">
          <p>
          Pioneering Satoshi Nakamoto's enhanced PoW with Move smart contracts, Starcoin launched on the mainnet in 2021. To address scalability challenges,Its innovative parallelization technology, FlexiDAG and TurboSTM, optimizes transaction speeds, epitomizing the advancements of the Starkcoin 2.0 phase.This phase signifies our commitment to continuous innovation, delivering a secure, efficient, and agile decentralized system for the Web3 era.
          </p>
          
        </div>
        <div className="hero__action">
          <button className="button button--primary">Light Whitepapers</button>
          <button className="button button--outline">Technical Whitepapers</button>
          <button className="button button--outline">Economic Whitepapers</button>
        </div>
      </div>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="./src/images/home-hero-mobile.png"
          type="image/png"
        />

        <source
          media="(min-width: 769px)"
          srcSet="./src/images/home-hero-desktop.png"
          type="image/png"
        />

        <img src="./src/images/home-hero-desktop.png" alt="" />
      </picture>
    </section>
  );
}
