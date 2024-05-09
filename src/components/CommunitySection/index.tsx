import Social from '@/components/Social';
import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n';

// import starmaskLogo from '@/images/starMask-logo.png';
import starmaskLogo from "@/images/starMask-logo.webp";
// import westarlabLogo from '@/images/westarlab-logo.png';
import westarlabLogo from "@/images/westarlab-logo.webp";
// import bixinLogo from '@/images/bixin-logo.png';
import bixinLogo from "@/images/bixin-logo.webp";
// import gateLogo from '@/images/gate-logo.png';
import gateLogo from "@/images/gate-logo.webp";
// import coinxLogo from '@/images/coinx-logo.png';
import coinxLogo from "@/images/coinx-logo.webp";
// import movebitLogo from '@/images/movebit-logo.png';
import movebitLogo from "@/images/movebit-logo.webp";
// import homeCommunity from '@/images/communityimage.png'; 
import homeCommunity from "@/images/communityimage.webp";




export default function CommunitySection({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--community">
      <div id="community" className="section__container community__container">
        <div className="section__title" data-aos="fade-up">
          <h3>
            <a href={getRelativeLocaleUrl(locale, "/community")} target="_blank">{t('home.community.title')}</a>
            </h3>
          <small>{t('home.community.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="column">
            <div data-aos="fade-up">
            <Social />
            </div>
            <div className="title" data-aos="fade-up">
              <a href={getRelativeLocaleUrl(locale, "/community", "#one-chain-dao")} target="_blank">
              {t('home.community.article.title')}
              </a>
              
            </div>
            <div className="contents" data-aos="fade-up">
            <p>{t('home.community.article.p1')}</p>
            <p>{t('home.community.article.p2')}</p>
            <p>{t('home.community.article.p3')}</p>
            </div>
            
          </div>
          <div className="column">
          <a href={getRelativeLocaleUrl(locale, "/community")} target="_blank">
            <img src={homeCommunity.src} alt="" />
            </a>
          </div>
        </div>
        <h4>{t('home.community.h4')}</h4>
      </div>

      <div className='marquee__container'>
        <div className="marquee marquee--text">
          <div className="marquee__item">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
          <div className="marquee__item" aria-hidden="true">{t('home.community.infiniteScrollText')}</div>
        </div>
      </div>

      <div className='marquee__container'>
        <div className="marquee marquee--logo">
          <div className="marquee__item">
            <img src={starmaskLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={westarlabLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={bixinLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={gateLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={coinxLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={movebitLogo.src} alt="" />
          </div>

          <div className="marquee__item" aria-hidden="true">
            <img src={starmaskLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={westarlabLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={bixinLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={gateLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={coinxLogo.src} alt="" />
          </div>
          <div className="marquee__item">
            <img src={movebitLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={starmaskLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={westarlabLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={bixinLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={gateLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={coinxLogo.src} alt="" />
          </div>
          <div className="marquee__item" aria-hidden="true">
            <img src={movebitLogo.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
