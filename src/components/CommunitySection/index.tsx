

import Social from '@/components/Social';
import type { CSSProperties } from "react";
import I18n, { type LocaleCode } from '@/i18n';

import starmaskLogo from '@/images/starmask-logo.png';
import westarlabLogo from '@/images/westarlab-logo.png';
import gateLogo from '@/images/gate-logo.png';
import coinxLogo from '@/images/coinx-logo.png';
import starcoinLogo from '@/images/starcoin-logo.png';

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

      <div className='marquee__container' style={{ '--count': 7,  '--speed': 60} as CSSProperties}>
        <div className="marquee marquee--text">
          <div className="marquee__item" style={{ '--index': 0 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 1 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 2 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 3 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 4 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 5 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" style={{ '--index': 6 } as CSSProperties}>{t('home.community.infiniteScrollText')}</div>
        </div>
      </div>

      <div className='marquee__container' style={{ '--count': 5,  '--speed': 30} as CSSProperties}>
        <div className="marquee marquee--logo">
          <div className="marquee__item" style={{ '--index': 0 } as CSSProperties}>
            <img src={starmaskLogo.src} alt="" />
          </div>
          <div className="marquee__item" style={{ '--index': 1 } as CSSProperties}>
            <img src={westarlabLogo.src} alt="" />
          </div>
          <div className="marquee__item" style={{ '--index': 2 } as CSSProperties}>
            <img src={gateLogo.src} alt="" />
          </div>
          <div className="marquee__item" style={{ '--index': 3 } as CSSProperties}>
            <img src={coinxLogo.src} alt="" />
          </div>
          <div className="marquee__item" style={{ '--index': 4 } as CSSProperties}>
            <img src={starcoinLogo.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
