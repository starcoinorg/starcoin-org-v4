import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'

export default function StarcoinMoveFeatures({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--starcoin-move-features section">
      <div id="starcoin-move-features" className="section__container starcoin-move-features__container">
        <div className="section__title" >
          <h3 dangerouslySetInnerHTML={{ __html: t('developers.starcoin_move_features.title') }} data-aos="fade-up"></h3>
          <small dangerouslySetInnerHTML={{ __html: t('developers.starcoin_move_features.des') }} data-aos="fade-up"></small>
        </div>
        <div className="section__content">
          <ul>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('developers.starcoin_move_features.li_1.h4') }}></h4>
              <p>{t('developers.starcoin_move_features.li_1.p')}</p>
              
            </li>
            <li data-aos="fade-left">
              <h4 dangerouslySetInnerHTML={{ __html: t('developers.starcoin_move_features.li_2.h4') }}></h4>
              <p>{t('developers.starcoin_move_features.li_2.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('developers.starcoin_move_features.li_3.h4') }}></h4>
              <p>{t('developers.starcoin_move_features.li_3.p')}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
