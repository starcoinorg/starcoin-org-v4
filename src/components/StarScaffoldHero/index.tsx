import starsCaffoldBanner from "@/images/starstack01.mp4";
// import getstcVideoPoster1 from "@/images/getstc-video-1.png";
import starsCaffoldVideoPoster from "@/images/starstack01.webp";
import I18n, { type LocaleCode } from "@/i18n";

export default function StarScaffoldHero({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="hero hero--starscaffold">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p>{t("starscaffold.hero.title")}</p>
          <p
            dangerouslySetInnerHTML={{ __html: t("starscaffold.hero.subtitle") }}
          ></p>
        </h2>
        <div className="hero__content">
          <p>{t("starscaffold.hero.desc")}</p>
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
