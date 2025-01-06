import I18n, { type LocaleCode } from "@/i18n";

export default function AOneStopSolutionForBuilding({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--solution-building">
      <div className="section__container solution-building__container" id="solution-building">
      <p data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("starstack.solutionBuilding.desc") }}
          ></p>
           <div className="solution-building__action" >
           <a
            target="_blank"
            // href={whitePaper}
            className="button button--primary"
            data-aos="fade-up">
            {t("starstack.solutionBuilding.action.getstarted")}
          
          </a>
          <a
            // href={getRelativeLocaleUrl(locale, "/getstc")}
            className="button button--outline"
            data-aos="fade-up" data-aos-delay="150">
            {t("starstack.solutionBuilding.action.resources")}
          </a>
        </div>
      </div>
    </section>
  );
}
