import './NewsSection.css';


import I18n, { type LocaleCode } from '@/i18n';

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
                <img src="http://i.pravatar.cc/500?img=12" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__badge">
                  {t('new')}
                </div>
                <h4 className="card__title">
                  {t('home.news.card_1.title')}
                </h4>
                <div className="card__date">2023.12.09</div>
                <div className="card__action">
                  <a href="#" className="button button--primary">
                    {t('view_more')} 
                    <svg className="icon--arrow-right-long"><use xlinkHref="#arrow-right-long" href="#arrow-right-long" /></svg>
                  </a>
                </div>
              </div>

            </div>
            <div className="card">
              <figure>
                <img src="http://i.pravatar.cc/300?img=2" alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('home.news.card_2.title')}
                </h4>
                <div className="card__date">2023.09.24</div>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="http://i.pravatar.cc/300?img=14" alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('home.news.card_3.title')}
                </h4>
                <div className="card__date">2023.09.24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
