import './NewsPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

import I18n, { type LocaleCode } from "@/i18n";

export default function NewsPageHero({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="hero hero--news">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p>{t('news.hero.title')}</p>
        </h2>
        <div className="hero__content">
          <p>{t('news.hero.desc')}</p>
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
