import './StarcoinTwoFeatures.css';

import FeatureTable from '@/components/FeatureTable';

import I18n, { type LocaleCode } from '@/i18n';

export default function StarcoinTwoFeatures({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--starcoin-two-features">
      <div id="starcoin-v2" className="section__container starcoin-two-features__container">
        <div className="section__title">
          {t('features.starcoin_v2.title')}
        </div>
        <div className="section__content">
          <FeatureTable locale={locale} />
        </div>
      </div>
    </section>
  );
}
