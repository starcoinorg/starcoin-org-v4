import I18n, { type LocaleCode } from "@/i18n";
import communityDome from  '@/images/community-dome.mp4';
// import communityVideoPoster2 from "@/images/community-video-2.png";
import communityVideoPoster2 from "@/images/community-video-2.webp";
export default function StarDome({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--star-dome">
      <div id="star-dome" className="section__container star-dome__container">
        <div className="section__title" data-aos="fade-up">
          <h3 dangerouslySetInnerHTML={{__html: t('community.dome.title')}}></h3>
        </div>
        <div className="section__content">
          <p data-aos="fade-up">{t('community.dome.desc')}</p>
          <div className="action" data-aos="fade-up">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjz736VwrpnCvFg8oUuapTx32-sMpFrbUZ-20bMF0qmsnpJw/viewform" target="_blank" className="button button--primary">
              {t('community.dome.action')}
            </a>
          </div>
          <div className="cards cards--star-dome">
            <a className="card" href="#" data-aos="fade-up">
              <div className="badge badge--coming-soon">
                {t('coming_soon')}
                </div>
              <div className="card__title">
                {t('community.dome.card.0.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.0.content')}
              </div>
            </a>
            <a className="card" href="https://starcoin.medium.com/starcoin-ambassador-program-star-dome-2-0-launch-87484457ccf" target="_blank" data-aos="fade-up" data-aos-delay="150">
              <div className="badge">
                {t('closed')}
              </div>
              <div className="card__title">
                {t('community.dome.card.1.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.1.content')}
              </div>
            </a>
            <a className="card" href="https://starcoin.medium.com/join-the-starcoin-ambassador-program-star-dome-program-12f1ea41aa1a" target="_blank" data-aos="fade-up" data-aos-delay="300">
              <div className="badge">
                {t('closed')}
              </div>
              <div className="card__title">
                {t('community.dome.card.2.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.2.content')}
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" playsInline autoPlay loop muted poster={communityVideoPoster2.src}>
          <source src={communityDome} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
