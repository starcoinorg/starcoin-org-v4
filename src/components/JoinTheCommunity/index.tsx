import I18n, { type LocaleCode } from "@/i18n";

export default function JoinTheCommunity({
  locale,
}: {
  locale: LocaleCode;
}) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--join-the-community">
      <div
        id="join-the-community"
        className="section__container join-the-community__container"
      >
        <div className="section__title" data-aos="fade-right">
          <h3
            dangerouslySetInnerHTML={{
              __html: t("developers.join_the_community.title"),
            }}
            data-aos="fade-up"
          ></h3>
          <small
            dangerouslySetInnerHTML={{
              __html: t("developers.join_the_community.subtitle"),
            }}
            data-aos="fade-up"
          ></small>
        </div>
        <div className="section__content">
          <p data-aos="fade-right">
            {t("developers.join_the_community.desc")}
          </p>
          <div className="actions">
          <a href="#" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('developers.join_the_community.action.join_the_community')}
          </a>
          <a href="#" target="_blank" className="button button--outline" data-aos="fade-up" data-aos-delay="100">
            {t('developers.join_the_community.action.more_about_move')}
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
