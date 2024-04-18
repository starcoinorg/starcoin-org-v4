import React from "react";
import './GetSTCPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

export default function GetSTCPageHero() {
  return (
    <section class="hero hero--individual">
      <div className="hero__container section__container">
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
