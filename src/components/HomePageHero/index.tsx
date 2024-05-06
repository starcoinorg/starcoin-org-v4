import StatisticsCard from "@/components/StatisticsCard";

import I18n, { getRelativeLocaleUrl, type LocaleCode } from "@/i18n";


import homebanner from "@/images/homebanner01.mp4";
import homeVideoPoster from "@/images/home-video-1.png";

export default function HomePageHero({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="hero hero--home">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <div> {t("home.hero.title")} </div>
          <div dangerouslySetInnerHTML={{ __html: t("home.hero.subtitle") }} />
        </h2>
        <div className="hero__content">
          <p dangerouslySetInnerHTML={{ __html: t("home.hero.desc_p1") }} />
          <p dangerouslySetInnerHTML={{ __html: t("home.hero.desc_p2") }} />
        </div>
        <div className="hero__action">
          <a
            href="https://starcoin.org/downloads/Starcoin_Whitepaper.pdf"
            className="button button--primary"
            data-aos="fade-up">
            {t("home.hero.action.whitepaper")}
          </a>
          <a
            href={getRelativeLocaleUrl(locale, "/getstc")}
            className="button button--outline"
            data-aos="fade-up" data-aos-delay="150">
            {t("home.hero.action.getstc")}
          </a>
        </div>
        <StatisticsCard locale={locale} />
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay loop muted playsInline poster={homeVideoPoster.src}>
          <source src={homebanner} type="video/mp4" />
        </video>
      </div>
      </div>
    </section>
  );
}
