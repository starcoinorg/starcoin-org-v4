import I18n, { type LocaleCode } from "@/i18n";

import newCard1 from '@/images/new1.png';
import newCard2 from '@/images/new2.png';
import newCard3 from '@/images/new3.png';
import newCard4 from '@/images/new4.png';
import newCard5 from '@/images/new5.png';


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
              <img src={newCard1.src} alt="" />
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
              <img src={newCard2.src} alt="" />
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
              <img src={newCard3.src} alt="" />
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
              <img src={newCard4.src} alt="" />
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
              <img src={newCard5.src} alt="" />
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
