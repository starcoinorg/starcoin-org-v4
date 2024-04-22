import "./StarcoinGrantDevelopers.css";

import I18n, { type LocaleCode } from "@/i18n";

export default function StarcoinGrantDevelopers({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--starcoin-grant-developers">
      <div id="starcoin-grant" className="section__container starcoin-grant-developers__container">
        <div className="section__title">
          <h4 dangerouslySetInnerHTML={{ __html: t('developers.grant.title') }}></h4>
          <small>{t('developers.grant.subtitle')}</small>
        </div>
        <div className="section__content">
          <p>{t('developers.grant.content.0')}</p>
          <button className="button button--primary">
            {t('more')}
          </button>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/1920/1024?random=1" alt="" />
      </figure>
    </section>
  );
}
