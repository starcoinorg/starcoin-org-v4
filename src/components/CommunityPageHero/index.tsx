import React from "react";
import './CommunityPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

import I18n, { type LocaleCode } from "@/i18n";

export default function CommunityPageHero({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="hero hero--community">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p dangerouslySetInnerHTML={{ __html: t('community.hero.title.0') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('community.hero.title.1') }}></p>
          <p dangerouslySetInnerHTML={{ __html: t('community.hero.title.2') }}></p>
          <p>{t('community.hero.title.3')}</p>
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
