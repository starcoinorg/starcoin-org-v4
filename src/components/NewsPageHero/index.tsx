import React from "react";
import './NewsPageHero.css';

export default function NewsPageHero() {
  return (
    <section className="hero hero--news">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p>NEWS & BLOG</p>
        </h2>
        <div className="hero__content">
          <p>Stay informed about the latest developments, events, and updates for the Starcoin project right here.
 For the most current and rapid access to project updates, join our Official Starcoin media community.</p>
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
