import I18n, { type LocaleCode } from "@/i18n";

export default function Geeks({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--geeks">
      <div id="geeks" className="section__container geeks__container">
      <div className="section__title" dangerouslySetInnerHTML={{__html: t('getstc.geek.title')}} data-aos="fade-right"></div>
      <div className="section__content">
        <p data-aos="fade-right">{t('getstc.geek.desc')}</p>
        <div className="card" data-aos="fade-up">
          <a href="https://starcoin.org/en/developers/node/install/" target="_blank" className="column">
              <span>{t('getstc.geek.card.0')}</span>
            <svg className="icon--arrow-right">
              <use xlinkHref="#arrowRightLong" href="#arrowRightLong" />
            </svg>
            </a>
          <a href="https://starcoin.org/en/developers/node/command/" target="_blank" className="column">
              <span>{t('getstc.geek.card.1')}</span>
            <svg className="icon--arrow-right">
              <use xlinkHref="#arrowRightLong" href="#arrowRightLong" />
            </svg>
            </a>
          <a href="https://starcoin.org/en/developers/node/command/console/" target="_blank" className="column">
              <span>{t('getstc.geek.card.2')}</span>
            <svg className="icon--arrow-right">
              <use xlinkHref="#arrowRightLong" href="#arrowRightLong" />
            </svg>
            </a>
        </div>
      </div>
      </div>
      
    </section>
  );
}
