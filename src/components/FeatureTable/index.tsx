import "./FeatureTable.css";

import I18n, { type LocaleCode } from '@/i18n';

export default function FeatureTable({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <div className="card--table">
      <div className="table--feature">
        <div className="row row__title">
          <div className="column">{t('feature_table.row_1.0')}</div>
          <div className="column">{t('feature_table.row_1.1')}</div>
          <div className="column">{t('feature_table.row_1.2')}</div>
        </div>

        <div className="row row__content">
          <div className="column">{t('feature_table.row_2.0')}</div>
          <div className="column">
            {t('feature_table.row_2.1')}
          </div>
          <div className="column">
            {t('feature_table.row_2.2')}
          </div>
        </div>

        <div className="row row__content">
          <div className="column">
            {t('feature_table.row_3.0')}
          </div>
          <div className="column" dangerouslySetInnerHTML={{ __html: t('feature_table.row_3.1') }}></div>
          <div className="column" dangerouslySetInnerHTML={{ __html: t('feature_table.row_3.2') }}></div>
        </div>

        <div className="row row__content">
          <div className="column">{t('feature_table.row_4.0')}</div>
          <div className="column">
            {t('feature_table.row_4.1')}
          </div>
          <div className="column">
            {t('feature_table.row_4.2')}
          </div>
        </div>

        <div className="row row__content">
          <div className="column">{t('feature_table.row_5.0')}</div>
          <div className="column">
            {t('feature_table.row_5.1')}
          </div>
          <div className="column">
            {t('feature_table.row_5.2')}
          </div>
        </div>

        <div className="row row__content">
          <div className="column">
            {t('feature_table.row_6.0')}
          </div>
          <div className="column">
            {t('feature_table.row_6.1')}
          </div>
          <div className="column">
            {t('feature_table.row_6.2')}
          </div>
        </div>
      </div>
    </div>
  );
}
