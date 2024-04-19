import React from "react";
import './NewsPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

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
