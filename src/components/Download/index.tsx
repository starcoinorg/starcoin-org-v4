import I18n, { type LocaleCode } from "@/i18n";

export default function Download({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <div className="card card--download" data-aos="fade-up">
      <div className="card__title">
        {t('getstc.star_mask.download.title')}
      </div>
      <div className="card__content">
        <div className="column">
          <div className="card__media">
            <svg>
              <use xlinkHref="#github2" href="#github2" />
            </svg>
            <div className="card__media__content">
              <p>{t('getstc.star_mask.download.card.0.media')}</p>
            </div>
          </div>
          <p>{t('getstc.star_mask.download.card.0.desc')}</p>
          <div className="card__action">
            <a href="https://github.com/starcoinorg/starmask-extension" target="_blank">{t('getstc.star_mask.download.card.0.action')}</a>
            <svg className="icon--download">
              <use xlinkHref="#download" href="#download" />
            </svg>
          </div>
        </div>
        <div className="column">
          <div className="card__media">
            <svg>
              <use xlinkHref="#chrome" href="#chrome" />
            </svg>
            <div className="card__media__content">
              <p>{t('getstc.star_mask.download.card.1.media')}</p>
            </div>
          </div>
          <p>{t('getstc.star_mask.download.card.1.desc')}</p>
          <div className="card__action">
            <a href="https://chromewebstore.google.com/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk" target="_blank">{t('getstc.star_mask.download.card.1.action')}</a>
            <svg className="icon--download">
              <use xlinkHref="#download" href="#download" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
