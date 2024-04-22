import FeatureTable from '@/components/FeatureTable';
import I18n, { type LocaleCode } from '@/i18n';

export default function StarcoinFeatures({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--starcoin-features">
      <div id="features" className="section__container starcoin-features__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('home.features.title') }}></h3>
          <small>{t('home.features.subtitle')}</small>
        </div>
        <div className="section__content">
          <p>{t('home.features.desc')}</p>
          <div className="cards cards--features">
            <div className="card">
              <figure className="card__media">
                <img src="http://i.pravatar.cc/200?img=2" alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">{t('home.features.card_1.h4')}</h4>
                <p>{t('home.features.card_1.p')}</p>
              </div>
            </div>
            <div className="card">
              <figure className="card__media">
                <img src="http://i.pravatar.cc/200?img=2" alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">{t('home.features.card_2.h4')}</h4>
                <p>{t('home.features.card_2.p')}</p>
              </div>
            </div>
          </div>
          <div className="card--parallelization">
            <div className="card__title">
              {t('home.features.table.title')}
            </div>
            <div className="card__content">
              <p>{t('home.features.table.desc')}</p>
              <FeatureTable locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
