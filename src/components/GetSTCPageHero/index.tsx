import getstcBanner from '@/images/getstc-banner.mp4';

import I18n, { type LocaleCode } from "@/i18n";

export default function GetSTCPageHero({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="hero hero--individual">
      <div className="hero__container section__container">
        <h2 className="hero__title" dangerouslySetInnerHTML={{__html: t('getstc.hero.title')}}></h2>
      </div>
      <div className="video--container">
        <video className="background-video" autoPlay loop muted poster="">
          <source src={getstcBanner} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
