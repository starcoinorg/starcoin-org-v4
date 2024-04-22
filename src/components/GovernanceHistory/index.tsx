import './GovernanceHistory.css';

import I18n, { type LocaleCode } from "@/i18n";

export default function GovernanceHistory({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--governance-history">
      <div className="section__container governance-history__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('community.gh.title') }}></h3>
          <small>{t('community.gh.desc')}</small>
        </div>
        <div className="section__content">
          <div className="history--info">
            <div className="item">
              <svg>
                <use xlinkHref="#governance" href="#governance" />
              </svg>
              <h5>{t('community.gh.info.0')}</h5>
            </div>
            <div className="item">
              <svg>
                <use xlinkHref="#democratic" href="#democratic" />
              </svg>
              <h5>{t('community.gh.info.1')}</h5>
            </div>
            <div className="item">
              <svg>
                <use xlinkHref="#access" href="#access" />
              </svg>
              <h5>{t('community.gh.info.2')}</h5>
            </div>
          </div>
          <div className="cards cards--history">
            <div className="card">
              <figure className="card__media">
                <img src="https://picsum.photos/400/400?random=3" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__title">
                  <small>{t('starcoin')}</small>
                  {t('community.gh.card.0')}
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
            <div className="card">
              <figure className="card__media">
                <img src="https://picsum.photos/400/400?random=2" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__title">
                  <small>{t('starcoin')}</small>
                  {t('community.gh.card.1')}
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="history--links">
            <div className="history--links__title">Governance history</div>
            <ul className="history--links__link">
              <li>
                <a href="#">{t('community.gh.history.0')}</a>
                <svg><use xlinkHref="#arrowRight" href="#arrowRight" /></svg>
              </li>
              <li>
                <a href="#">{t('community.gh.history.1')}</a>
                <svg><use xlinkHref="#arrowRight" href="#arrowRight" /></svg>
              </li>
              <li>
                <a href="#">{t('community.gh.history.2')}</a>
                <svg><use xlinkHref="#arrowRight" href="#arrowRight" /></svg>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
