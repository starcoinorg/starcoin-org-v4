import "./NewTrails.css";

import I18n, { type LocaleCode } from "@/i18n";

export default function NewTrails({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--new-trails">
      <div id="new-trails" className="section__container new-trails__container">
        <div className="section__title" dangerouslySetInnerHTML={{ __html: t('features.new_trails.title') }}></div>
        <div className="section__content">
          <input type="radio" className="sr-only" name="news" id="storage" />
          <input type="radio" className="sr-only" name="news" id="easy-gas" />
          <input type="radio" className="sr-only" name="news" id="dao" checked />
          <input type="radio" className="sr-only" name="news" id="billing" />
          <input type="radio" className="sr-only" name="news" id="bootstrapped" />
          <input type="radio" className="sr-only" name="news" id="stdlib" />
          <input type="radio" className="sr-only" name="news" id="freely-nft" />
          <input type="radio" className="sr-only" name="news" id="verification" />
          <ul className="news-lists">
            <li id="news__item--storage">
              <label htmlFor="storage">
                {t('features.new_trails.news_title.0')}
              </label>
            </li>
            <li id="news__item--easy-gas">
              <label htmlFor="easy-gas">
                {t('features.new_trails.news_title.1')}
              </label>
            </li>
            <li id="news__item--dao">
              <label htmlFor="dao">
                {t('features.new_trails.news_title.2')}
              </label>
            </li>
            <li id="news__item--billing">
              <label htmlFor="billing">
                {t('features.new_trails.news_title.3')}
              </label>
            </li>
            <li id="news__item--bootstrapped">
              <label htmlFor="bootstrapped">
                {t('features.new_trails.news_title.4')}
              </label>
            </li>
            <li id="news__item--stdlib">
              <label htmlFor="stdlib">
                {t('features.new_trails.news_title.5')}
              </label>
            </li>
            <li id="news__item--freely-nft">
              <label htmlFor="freely-nft">
                {t('features.new_trails.news_title.6')}
              </label>
            </li>
            <li id="news__item--verification">
              <label htmlFor="verification">
                {t('features.new_trails.news_title.7')}
              </label>
            </li>
          </ul>
          <ul className="cards--new">
            <li id="card--storage">
              <svg>
                <use xlinkHref="#card1" href="#card1" />
              </svg>
              <p>
                {t('features.new_trails.news_content.0')}
              </p>
            </li>
            <li id="card--easy-gas">
              <svg>
                <use xlinkHref="#card2" href="#card2" />
                <p>
                  {t('features.new_trails.news_content.1')}
                </p>
              </svg>
            </li>
            <li id="card--dao">
              <svg>
                <use xlinkHref="#card3" href="#card3" />
              </svg>
              <p>
                {t('features.new_trails.news_content.2')}
              </p>
            </li>
            <li id="card--billing">
              <svg>
                <use xlinkHref="#card4" href="#card4" />
              </svg>
              <p>
                {t('features.new_trails.news_content.3')}
              </p>
            </li>
            <li id="card--bootstrapped">
              <svg>
                <use xlinkHref="#card5" href="#card5" />
              </svg>
              <p>
                {t('features.new_trails.news_content.4')}
              </p>
            </li>
            <li id="card--stdlib">
              <svg>
                <use xlinkHref="#card6" href="#card6" />
              </svg>
              <p>
                {t('features.new_trails.news_content.5')}
              </p>
            </li>
            <li id="card--freely-nft">
              <svg>
                <use xlinkHref="#card7" href="#card7" />
              </svg>
              <p>
                {t('features.new_trails.news_content.6')}
              </p>
            </li>
            <li id="card--verification">
              <svg>
                <use xlinkHref="#card8" href="#card8" />
              </svg>
              <p>
                {t('features.new_trails.news_content.7')}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <figure className="news-trails__bg">
        <img src="https://picsum.photos/1920/1024?random=4" alt="" />
      </figure>
    </section>
  );
}
