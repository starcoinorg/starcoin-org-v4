import I18n, { type LocaleCode } from "@/i18n";

export default function ResourceDocumentation({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--solution-building section--resource-documentation">
      <div className="section__container solution-building__container resource-documentation__container" id="resource-documentation">
      <p data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: t("starstack.solutionBuilding.desc") }}
          ></p>
           <div className="solution-building__action" >
          
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
