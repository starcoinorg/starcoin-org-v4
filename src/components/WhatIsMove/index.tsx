import I18n, { type LocaleCode } from "@/i18n";

// import testImage from '@/images/home_03HighPerformance.png';
// import highPerformance from "@/images/home_03HighPerformance.webp";

export default function WhatIsMove({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)
  

  return (
    <section className="section section--what-is-move">
      <div id="what-is-move" className="what-is-move__container section__container">
        <div className="section__title">
          <h4 dangerouslySetInnerHTML={{ __html: t('developers.what_is_move.title') }} data-aos="fade-up"></h4>
          <small data-aos="fade-up">{t('developers.what_is_move.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="des" dangerouslySetInnerHTML={{ __html: t('developers.what_is_move.desc_p') }} data-aos="fade-up"></div>
          <div className="cards" data-aos="fade-up">
            <div className="card">
              <h3 className="card__title">{t('developers.what_is_move.card_1.title')}</h3>
              <div className="card__content">
                <p>{t('developers.what_is_move.card_1.content.p1')}</p>
                <ul>
                  <li>{t('developers.what_is_move.card_1.content.li1')}</li>
                  <li>{t('developers.what_is_move.card_1.content.li2')}</li>
                </ul>
                <p>{t('developers.what_is_move.card_1.content.p2')}</p>
                <div className="action">
                  <a href="#">{t('developers.what_is_move.card_1.action')}</a>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card__title">{t('developers.what_is_move.card_2.title')}</h3>
              <div className="card__content">
                <p>{t('developers.what_is_move.card_2.content.p1')}</p>
                <div className="action">
                  <a href="#">{t('developers.what_is_move.card_2.action')}</a>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card__title">{t('developers.what_is_move.card_3.title')}</h3>
              <div className="card__content">
                <p>{t('developers.what_is_move.card_3.content.p1')}</p>
                <ul>
                  <li>{t('developers.what_is_move.card_3.content.li1')}</li>
                  <li>{t('developers.what_is_move.card_3.content.li2')}</li>
                  <li>{t('developers.what_is_move.card_3.content.li3')}</li>
                  <li>{t('developers.what_is_move.card_3.content.li4')}</li>
                </ul>
                <p>{t('developers.what_is_move.card_3.content.p2')}</p>
                <div className="action">
                  <a href="#">{t('developers.what_is_move.card_3.action')}</a>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="card__title">{t('developers.what_is_move.card_4.title')}</h3>
              <div className="card__content">
                <p>{t('developers.what_is_move.card_4.content.p1')}</p>
                <div className="action">
                  <a href="#">{t('developers.what_is_move.card_4.action')}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
