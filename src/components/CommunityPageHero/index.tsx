import React from "react";
import './CommunityPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

export default function CommunityPageHero() {
  return (
    <section className="hero hero--community">
      <div className="hero__container section__container">
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
          srcSet={img_hhm.src}
          type="image/png"
        />

        <source
          media="(min-width: 769px)"
          srcSet={img_hhd.src}
          type="image/png"
        />

        <img src={img_hhd.src} alt="" />
      </picture>
    </section>
  );
}
