import I18n, { type LocaleCode } from "@/i18n";

// import node1 from '@/images/developers-node1.png';
import node1 from "@/images/developers-node1.webp";
// import node2 from '@/images/developers-node2.png';
import node2 from "@/images/developers-node2.webp";
// import node3 from '@/images/developers-node3.png';
import node3 from "@/images/developers-node3.webp";
// import node4 from '@/images/developers-node4.png';
import node4 from "@/images/developers-node4.webp";
// import node5 from '@/images/developers-node5.png';
import node5 from "@/images/developers-node5.webp";


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
          <h3 data-aos="fade-up">
            <strong>
              {t('developers.easy_building.title')}
            </strong>
          </h3>
          <small data-aos="fade-up">{t('developers.easy_building.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="cards cards--easy-building">
            <a href="https://starcoin.org/en/developers/node/" target="_blank" className="card" data-aos="fade-right">
              <figure>
                <div className="figure--inner">
                  <img src={node1.src} alt="" />
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
            </a>

            <a href="https://starcoin.org/en/developers/move/" target="_blank" className="card" data-aos="fade-left">
              <figure>
                <div className="figure--inner">
                  <img src={node2.src} alt="" />
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
            </a>

            <a href="https://starcoin.org/en/developers/dapp/" target="_blank" className="card" data-aos="fade-right">
              <figure>
                <div className="figure--inner">
                  <img src={node3.src} alt="" />
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
            </a>

            <a href="https://starcoin.org/en/developers/examples/" target="_blank" className="card" data-aos="fade-left">
              <figure>
                <div className="figure--inner">
                  <img src={node4.src} alt="" />
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
            </a>

            <a href="https://starcoin.org/en/developers/others/" target="_blank" className="card" data-aos="fade-right">
              <figure>
                <div className="figure--inner">
                  <img src={node5.src} alt="" />
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
