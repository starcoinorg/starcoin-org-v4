import I18n, { type LocaleCode } from "@/i18n";

import testImage from '@/images/Home_01EnhancedPowConsensus.png'

export default function NewsCard({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--news-card">
      <div id="news-blog" className="section__container news-card__container">
        <div className="cards cards--news">
          <div className="card">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card__content">
              <h4>{t('news.cards.0.title')}</h4>
              <p>{t('news.cards.0.content')}</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card__content">
              <h4>{t('news.cards.1.title')}</h4>
              <p>{t('news.cards.1.content')}</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card__content">
              <h4>{t('news.cards.2.title')}</h4>
              <p>{t('news.cards.2.content')}</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card__content">
              <h4>{t('news.cards.3.title')}</h4>
              <p>{t('news.cards.3.content')}</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card__content">
              <h4>{t('news.cards.4.title')}</h4>
              <p>{t('news.cards.4.content')}</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
