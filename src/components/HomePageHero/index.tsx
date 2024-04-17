import React from "react";
import "./HomePageHero.css";

import StatisticsCard from "../StatisticsCard/index.tsx";

export default function HomePageHero() {
  return (
    <section className="hero hero--home">
      <div className="hero--container">
        <h2 className="hero__title">
          <p>power in speed</p>
          <p>
            innovate with <strong>pow</strong>
          </p>
        </h2>
        <div className="hero__content">
          <p>
            Since 2020, Starcoin has been pioneering{" "}
            <strong>enhanced PoW </strong> consensus and <strong>Move smart contracts</strong>,
            ensuring secure, scalable blockchain infrastructure.
          </p>
          <p>
            Experience <strong>lightning-fast block</strong> generation with our <strong>FlexiDAG</strong> and
            <strong>TurboSTM</strong> technologies, fostering efficiency and reliability for Web3
            digital life, as we propel the digital economy forward with our
            commitment to decentralization and security.
          </p>
        </div>
        <div className="hero__action">
          <button className="button button--primary">Light Whitepapers</button>
          <button className="button button--outline">Get STC</button>
        </div>
        <StatisticsCard />
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
