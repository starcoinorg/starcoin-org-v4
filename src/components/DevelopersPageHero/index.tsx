import React from "react";
import './DevelopersPageHero.css';

export default function DevelopersPageHero() {
  return (
    <section className="hero hero--developers">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p><strong>Launchpad</strong></p>
          <p>
          to Move
          </p>
        </h2>
        <div className="hero__content">
          <p>
          Starcoin has pioneered the establishment of the first Move language developer community since July 2020.
As the first permissionless PoW blockchain based on the Move smart contract,
          </p>
          <p>Starcoin boasts rich implementations including the <strong>U256 type, token/NFT/SBT standard, one-chain DAO governance system,EasyGas</strong>, and many other innovative features.</p>
          
        </div>
        <div className="hero__action">
          <button className="button button--primary">Resources & Tutorials</button>
          <button className="button button--outline">Github</button>
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
