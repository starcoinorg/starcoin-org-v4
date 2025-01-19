import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'

export default function StarstackFeatures({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--choose-starstack section section-starstack-features">
      <div id="starstack-features" className="section__container choose-starstack__container starstack-features__container">
        <div className="section__title" >
          <h3 dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.title') }} data-aos="fade-up"></h3>
          <small dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.des') }} data-aos="fade-up"></small>
        </div>
        <div className="section__content">
          <ul>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.li_1.h4') }}></h4>
              <p>{t('starstack.starstack_features.li_1.p')}</p>
              
            </li>
            <li data-aos="fade-left">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.li_2.h4') }}></h4>
              <p>{t('starstack.starstack_features.li_2.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.li_3.h4') }}></h4>
              <p>{t('starstack.starstack_features.li_3.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.starstack_features.li_4.h4') }}></h4>
              <p>{t('starstack.starstack_features.li_4.p')}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
