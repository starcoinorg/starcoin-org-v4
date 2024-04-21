import './CommunitySection.css';

import Social from '@/components/Social';
import InfiniteScrollingLogos from '@/components/InfiniteScrollingLogos';
import InfiniteScrollingTexts from '@/components/InfiniteScrollingTexts';

import I18n, { type LocaleCode } from '@/i18n';

export default function CommunitySection({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--community">
      <div id="community" className="section__container community__container">
        <div className="section__title">
          <h3>{t('home.community.title')}</h3>
          <small>{t('home.community.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="column">
            <Social />
            <div className="title">
              {t('home.community.article.title')}
            </div>
            <p>{t('home.community.article.p1')}</p>
            <p>{t('home.community.article.p2')}</p>
            <p>{t('home.community.article.p3')}</p>
          </div>
          <div className="column">
            <img src="http://i.pravatar.cc/500?img=9" alt="" />
          </div>
        </div>
        <h4>{t('home.community.h4')}</h4>
      </div>
      <InfiniteScrollingTexts text="Wallet-Dex-Exchange-Mining Pool⎻-NFT Marketplace⎻-Stablecoin" />
      <InfiniteScrollingLogos />
    </section>
  );
}
