import './StatisticsCard.css';

import I18n, { type LocaleCode } from '@/i18n'

export default function StatisticsCard({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <div className="card card--statistics">
      <div className="card__title">
        <span>{t('home.stat_card.title_1')}</span>
        <span>{t('home.stat_card.title_2')}</span>
        <span>{t('home.stat_card.title_3')}</span>
      </div>
      <div className="card__content">
        <dl>
          <dt>{t('home.stat_card.dt_1')}</dt>
          <dd>$0,000001</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_2')}</dt>
          <dd>16,069,175</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_3')}</dt>
          <dd>18,434,267</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_4')}</dt>
          <dd>3</dd>
        </dl>
      </div>
    </div>
  );
}
