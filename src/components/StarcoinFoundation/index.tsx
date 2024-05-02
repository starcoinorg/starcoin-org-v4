import I18n, { type LocaleCode } from "@/i18n";

// import featuresFoundation from '@/images/features-foundation.mp4';

export default function StarcoinFoundation({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--starcoin-foundation">
      <div id="starcoin-foundation" className="section__container starcoin-foundation__container">
        <div className="section__title" data-aos="fade-right">
          <h3 dangerouslySetInnerHTML={{__html: t('features.foundation.title')}} ></h3>
          <small>{t('features.foundation.subtitle')}</small>
        </div>
        <div className="section__content">
          <p data-aos="fade-left">
            {t('features.foundation.content_p1')}
          </p>
        </div>
      </div>
      {/* <div className="video--container">
        <video className="background-video" autoPlay loop muted playsInline poster="">
          <source src={featuresFoundation} type="video/mp4" />
        </video>
      </div> */}
    </section>
  );
}
