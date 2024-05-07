import featuresBanner from '@/images/features-banner.mp4';
// import featureVidePoster1 from '@/images/features-video-1.png';
import featureVidePoster1 from "@/images/features-video-1.webp";
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
          <a href="https://starcoin.org/downloads/Starcoin_Whitepaper.pdf" target="_blank" className="button button--primary" data-aos="fade-up">
            {t('features.hero.action.0')}
          </a>
          <a href="https://starcoin.org/en/overview/technology_whitepaper/" target='_blank' className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('features.hero.action.1')}
          </a>
          <a href="https://starcoin.org/en/overview/economy_whitepaper/" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="200">
            {t('features.hero.action.2')}
          </a>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay loop muted playsInline poster={featureVidePoster1.src}>
          <source src={featuresBanner} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
