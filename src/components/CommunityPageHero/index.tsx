import communityBanner from "@/images/community-banner.mp4";

import I18n, { type LocaleCode } from "@/i18n";

export default function CommunityPageHero({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="hero hero--community">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p
            dangerouslySetInnerHTML={{ __html: t("community.hero.title.0") }}
          ></p>
          <p
            dangerouslySetInnerHTML={{ __html: t("community.hero.title.1") }}
          ></p>
          <p
            dangerouslySetInnerHTML={{ __html: t("community.hero.title.2") }}
          ></p>
          <p>{t("community.hero.title.3")}</p>
        </h2>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            poster=""
          >
            <source src={communityBanner} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
