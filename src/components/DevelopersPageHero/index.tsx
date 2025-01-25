import developersBanner from '@/images/developers-banner.mp4';
// import developerVideoPoster1 from "@/images/developers-video-1.png";
import developerVideoPoster1 from "@/images/developers-video-1.webp";
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
          <a href="https://v3.starcoin.org/en/developers/node/" target="_blank" className="button button--primary" data-aos="fade-up">
            {t('developers.hero.action.0')}
          </a>
          <a href="https://github.com/starcoinorg" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('developers.hero.action.1')}
          </a>
          <a href="https://stcscan.io/" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="200">
            {t('developers.hero.action.2')}
          </a>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay loop muted playsInline poster={developerVideoPoster1.src}>
          <source src={developersBanner} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
