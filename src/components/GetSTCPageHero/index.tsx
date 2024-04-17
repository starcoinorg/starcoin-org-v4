import React from "react";
import './GetSTCPageHero.css';

export default function GetSTCPageHero() {
  return (
    <section class="hero hero--individual">
      <div className="hero--container">
        <h2 className="hero__title">
          <p>Easy Fun</p>
          <p>
          with <strong>Starcoin</strong>
          </p>
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
