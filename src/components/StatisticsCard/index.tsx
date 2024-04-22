import './StatisticsCard.css';

import I18n, { type LocaleCode } from '@/i18n'
import { useAvgGas, useBlockTime, useChainInfo, useHashRate } from './index.service';

export default function StatisticsCard({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  const { total_trans } = useChainInfo()
  const { block_time } = useBlockTime()
  const { hash_rate } = useHashRate()
  const { avg_gas } = useAvgGas()

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
          <dd>{avg_gas || '-'}</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_2')}</dt>
          <dd>{hash_rate || '-'}</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_3')}</dt>
          <dd>{total_trans || '-'}</dd>
        </dl>
        <dl>
          <dt>{t('home.stat_card.dt_4')}</dt>
          <dd>{block_time || '-'}</dd>
        </dl>
      </div>
    </div>
  );
}
