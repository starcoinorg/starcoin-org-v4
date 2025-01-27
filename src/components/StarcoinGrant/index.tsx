import I18n, { type LocaleCode } from "@/i18n";

export default function StarcoinGrant({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--starcoin-grant">
      <div id="starcoin-grant" className="section__container starcoin-grant__container">
        <div className="section__title" data-aos="zoom-in">
          <h3 dangerouslySetInnerHTML={{__html: t('features.grant.title')}}></h3>
          <small>
            {t('features.grant.subtitle')}
          </small>
        </div>
        <div className="section__content">
          <p data-aos="zoom-in">
            {t('features.grant.content_p1')}
          </p>
        </div>
      </div>
      
    </section>
  );
}
