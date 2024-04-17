import React from "react";
import './CommunityPageHero.css';

export default function CommunityPageHero() {
  return (
    <section className="hero hero--community">
      <div className="hero--container">
        <h2 className="hero__title">
          <p>Make <strong>Friends</strong> with</p>
          <p>the Explorers <strong>Advocates</strong></p>
          <p>and <strong>Forerunners</strong> </p>
          <p>of WEB 3.0</p>
        </h2>
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
