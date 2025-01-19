import I18n, { type LocaleCode } from "@/i18n";

import featuresFoundation from '@/images/features-foundation.mp4';
// import featureVidePoster3 from "@/images/features-video-3.png";
import featureVidePoster3 from "@/images/features-video-3.webp";
export default function DownloadTheSdk({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--download-the-sdk">
      <div id="download-the-sdk" className="section__container download-the-sdk__container">
        <div className="section__title" data-aos="fade-up">
          <h3 dangerouslySetInnerHTML={{__html: t('developers.download_the_sdk.title')}} ></h3>
          <small>{t('developers.download_the_sdk.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="cards">
            <div className="card" data-aos="fade-up" data-aos-delay="50">
            <span>{t('developers.download_the_sdk.card1.order')}</span>
              <h4 dangerouslySetInnerHTML={{__html: t('developers.download_the_sdk.card1.h4')}} ></h4>
              
              <p>{t('developers.download_the_sdk.card1.p')}</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="100">
            <span>{t('developers.download_the_sdk.card2.order')}</span>
              <h4 dangerouslySetInnerHTML={{__html: t('developers.download_the_sdk.card2.h4')}} ></h4>
              
              <p>{t('developers.download_the_sdk.card2.p')}</p>
            </div>
            <div className="card" data-aos="fade-up" data-aos-delay="150">
            <span>{t('developers.download_the_sdk.card3.order')}</span>
              <h4 dangerouslySetInnerHTML={{__html: t('developers.download_the_sdk.card3.h4')}} ></h4>
              
              <p>{t('developers.download_the_sdk.card3.p')}</p>
            </div>
          </div>
          <div className="actions">
          <a href="#" target="_blank" className="button button--primary" data-aos="fade-up" data-aos-delay="50">
            {t('developers.download_the_sdk.action.download_the_SDK')}
          </a>
          <a href="#" target="_blank" className="button button--secondary" data-aos="fade-up" data-aos-delay="100">
            {t('developers.download_the_sdk.action.explore_tutorials')}
          </a>
          </div>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay loop muted playsInline poster={featureVidePoster3.src}>
          <source src={featuresFoundation} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
