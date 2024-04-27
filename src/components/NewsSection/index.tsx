import I18n, { type LocaleCode } from '@/i18n';
import homenews from '@/images/homenews.mp4';

import newCardImage1 from '@/images/new-1.jpeg';
import newCardImage2 from '@/images/new-2.jpeg';
import newCardImage3 from '@/images/new-3.jpeg';

export default function NewsSection({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--news">
      <div id="news" className="section__container news__container">
        <div className="section__title">
          <h3>{t('home.news.title')}</h3> 
          <small>{t('home.news.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="cards cards--news">
            <div className="card">
              <figure>
              <a href="https://starcoin.medium.com/starcoin-blockchain-functionality-restoration-update-8404dcb0ec79" target="_blank">
                <img src={newCardImage1.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <div className="card__badge">
                  {t('new')}
                </div>
                <h4 className="card__title">
                  <a href="https://starcoin.medium.com/starcoin-blockchain-functionality-restoration-update-8404dcb0ec79" target="_blank">
                  {t('home.news.card_1.title')}
                  </a>
                  
                </h4>
                <div className="card__date">2023.12.09</div>
                <div className="card__action">
                  <a href="https://starcoin.medium.com/starcoin-blockchain-functionality-restoration-update-8404dcb0ec79" target="_blank" className="button button--primary">
                    {t('view_more')} 
                    <svg className="icon--arrow-right-long"><use xlinkHref="#arrow-right-long" href="#arrow-right-long" /></svg>
                  </a>
                </div>
              </div>

            </div>
            <div className="card">
              <figure>
              <a href="https://starcoin.medium.com/first-flexidag-pow-blockchain-in-move-ecosystem-27aab6bdf4a8" target="_blank">
                <img src={newCardImage2.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  <a href="https://starcoin.medium.com/first-flexidag-pow-blockchain-in-move-ecosystem-27aab6bdf4a8" target="_blank">
                  {t('home.news.card_2.title')}
                  </a>
                  
                </h4>
                <div className="card__date">2023.09.24</div>
              </div>
            </div>
            <div className="card">
              <figure>
              <a href="https://starcoin.medium.com/starcoin-2-0-revolutionizing-with-pow-dag-join-our-testnet-to-experience-efficient-mining-71b832dda341" target="_blank">
                <img src={newCardImage3.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  <a href="https://starcoin.medium.com/starcoin-2-0-revolutionizing-with-pow-dag-join-our-testnet-to-experience-efficient-mining-71b832dda341" target="_blank">
                  {t('home.news.card_3.title')}
                  </a>
                </h4>
                <div className="card__date">2023.09.24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video--container">
        <video className="background-video" autoPlay loop playsInline muted poster="">
          <source src={homenews} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
