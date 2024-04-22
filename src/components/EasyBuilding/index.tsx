import "./EasyBuilding.css";

import I18n, { type LocaleCode } from "@/i18n";

export default function EasyBuilding({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--easy-building">
      <div id="easy-building" className="section__container easy-building__container">
        <div className="section__title">
          <h3>
            <strong>
              {t('developers.easy_building.title')}
            </strong>
          </h3>
          <small>{t('developers.easy_building.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="cards cards--easy-building">
            <div className="card">
              <figure>
                <div className="figure--inner">
                  <img src="https://picsum.photos/124/186?random=1" alt="" />
                  <figcaption>01</figcaption>
                </div>

              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('developers.easy_building.card_1.title')}
                </h4>
                <p>
                  {t('developers.easy_building.card_1.content')}
                </p>
              </div>
              <svg className="icon--arrowRight">
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </div>

            <div className="card">
              <figure>
                <div className="figure--inner">
                  <img src="https://picsum.photos/124/186?random=1" alt="" />
                  <figcaption>02</figcaption>
                </div>

              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('developers.easy_building.card_2.title')}
                </h4>
                <p>
                  {t('developers.easy_building.card_2.content')}
                </p>
              </div>
              <svg className="icon--arrowRight">
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </div>

            <div className="card">
              <figure>
                <div className="figure--inner">
                  <img src="https://picsum.photos/124/186?random=1" alt="" />
                  <figcaption>03</figcaption>
                </div>

              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('developers.easy_building.card_3.title')}
                </h4>
                <p>
                  {t('developers.easy_building.card_3.content')}
                </p>
              </div>
              <svg className="icon--arrowRight">
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </div>

            <div className="card">
              <figure>
                <div className="figure--inner">
                  <img src="https://picsum.photos/124/186?random=1" alt="" />
                  <figcaption>04</figcaption>
                </div>

              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('developers.easy_building.card_4.title')}
                </h4>
                <p>
                  {t('developers.easy_building.card_4.content')}
                </p>
              </div>
              <svg className="icon--arrowRight">
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </div>

            <div className="card">
              <figure>
                <div className="figure--inner">
                  <img src="https://picsum.photos/124/186?random=1" alt="" />
                  <figcaption>05</figcaption>
                </div>

              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  {t('developers.easy_building.card_5.title')}
                </h4>
                <p>
                  {t('developers.easy_building.card_5.content')}
                </p>
              </div>
              <svg className="icon--arrowRight">
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
