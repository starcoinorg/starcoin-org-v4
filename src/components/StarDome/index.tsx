import './StarDome.css';

import I18n, { type LocaleCode } from "@/i18n";

export default function StarDome({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--star-dome">
      <div id="star-dome" className="section__container star-dome__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{__html: t('community.dome.title')}}></h3>
        </div>
        <div className="section__content">
          <p>{t('community.dome.desc')}</p>
          <div className="action">
            <button className="button button--primary">
              {t('community.dome.action')}
            </button>
          </div>
          <div className="cards cards--star-dome">
            <div className="card">
              <div className="badge badge--coming-soon">
                {t('coming_soon')}
                </div>
              <div className="card__title">
                {t('community.dome.card.0.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.0.content')}
              </div>
            </div>
            <div className="card">
              <div className="badge">
                {t('closed')}
              </div>
              <div className="card__title">
                {t('community.dome.card.1.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.1.content')}
              </div>
            </div>
            <div className="card">
              <div className="badge">
                {t('closed')}
              </div>
              <div className="card__title">
                {t('community.dome.card.2.title')}
              </div>
              <div className="card__content">
                {t('community.dome.card.2.content')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/1920/1024?random=3" alt="" />
      </figure>
    </section>
  );
}
