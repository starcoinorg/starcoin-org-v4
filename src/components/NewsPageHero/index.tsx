import newsBanner from '@/images/news-banner.mp4';

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
          {/* <p>{t('news.hero.desc')}</p> */}
          <p dangerouslySetInnerHTML={{ __html: t("news.hero.desc") }} />
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay playsInline loop muted poster="">
          <source src={newsBanner} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
