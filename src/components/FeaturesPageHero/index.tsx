import featuresBanner from '@/images/features-banner.mp4';

import I18n, { type LocaleCode } from "@/i18n";

export default function FeaturesPageHero({
  locale
}: {
  locale: LocaleCode
}) {

  const t = I18n.create_trans(locale);

  return (
    <section className="hero hero--features">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p>{t('features.hero.title')}</p>
          <p dangerouslySetInnerHTML={{__html: t('features.hero.subtitle')}}></p>
        </h2>
        <div className="hero__content">
          <p>{t('features.hero.desc')}</p>
        </div>
        <div className="hero__action">
          <a href="#" className="button button--primary">
            {t('features.hero.action.0')}
          </a>
          <a href="#" className="button button--outline">
            {t('features.hero.action.1')}
          </a>
          <a href="#" className="button button--outline">
            {t('features.hero.action.2')}
          </a>
        </div>
      </div>
      <div className="video--container">
        <video className="background-video" autoPlay loop muted poster="">
          <source src={featuresBanner} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
