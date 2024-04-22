import './DevelopersPageHero.css';

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

import I18n, { type LocaleCode } from "@/i18n";

export default function DevelopersPageHero({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="hero hero--developers">
      <div className="hero__container section__container">
        <h2 className="hero__title" dangerouslySetInnerHTML={{ __html: t('developers.hero.title') }}></h2>
        <div className="hero__content">
          <p>
            {t('developers.hero.desc_p1')}
          </p>
          <p dangerouslySetInnerHTML={{ __html: t('developers.hero.desc_p2') }}></p>

        </div>
        <div className="hero__action">
          <button className="button button--primary">
            {t('developers.hero.action.0')}
          </button>
          <button className="button button--outline">
            {t('developers.hero.action.1')}
          </button>
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
