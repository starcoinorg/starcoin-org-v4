import starsCaffoldBanner from "@/images/starstack01.mp4";
// import getstcVideoPoster1 from "@/images/getstc-video-1.png";
import starsCaffoldVideoPoster from "@/images/starstack01.webp";
import I18n, { type LocaleCode } from "@/i18n";

export default function StarScaffoldHero({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="hero hero--starscaffold">
      <div className="hero__container section__container" id="get_start">
        <h2 className="hero__title">
          <p>{t("starstack.hero.title")}</p>
          <p
            dangerouslySetInnerHTML={{ __html: t("starstack.hero.subtitle") }}
          ></p>
        </h2>
        <div className="hero__content">
          <p dangerouslySetInnerHTML={{ __html: t("starstack.hero.desc.p1") }}></p>
          <p dangerouslySetInnerHTML={{ __html: t("starstack.hero.desc.p2") }}></p>
          <div className="actions">
          <a href="#" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('starstack.hero.action.get_starte_with_starStack')}
          </a>
          <a href="#" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('starstack.hero.action.github')}
          </a>
          </div>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
          <video
            className="background-video"
            autoPlay
            loop
            playsInline
            muted
            poster={starsCaffoldVideoPoster.src}
          >
            <source src={starsCaffoldBanner} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
