import I18n, { type LocaleCode } from "@/i18n";

import developersGrand from '@/images/developers-grand.mp4'
// import developersVideoPoster2 from "@/images/developers-video-2.png";
import developersVideoPoster2 from "@/images/developers-video-2.webp";
export default function StarcoinGrantDevelopers({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--starcoin-grant-developers">
      <div id="starcoin-grant" className="section__container starcoin-grant-developers__container">
        <div className="section__title" data-aos="fade-left">
          <h4 dangerouslySetInnerHTML={{ __html: t('developers.grant.title') }}></h4>
          <small>{t('developers.grant.subtitle')}</small>
        </div>
        <div className="section__content" data-aos="fade-right">
          <svg className="icon--quote-left">
              <use xlinkHref="#qoute" href="#qoute" />
          </svg>
          <p>{t('developers.grant.content.0')}</p>
          <a href="#" className="button button--primary">
            {t('more')}
          </a>
          <svg className="icon--quote-right">
              <use xlinkHref="#qoute" href="#qoute" />
          </svg>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" playsInline autoPlay loop muted poster={developersVideoPoster2.src}>
          <source src={developersGrand} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
