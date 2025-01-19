import I18n, { type LocaleCode } from "@/i18n";

// import testImage from '@/images/home_03HighPerformance.png';
// import highPerformance from "@/images/home_03HighPerformance.webp";

export default function WhyMove({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--why-move">
      <div id="why-move" className="why-move__container section__container">
        <div className="section__title">
          <h4
            dangerouslySetInnerHTML={{ __html: t("developers.why_move.title") }}
            data-aos="fade-up"
          ></h4>
        </div>
        <div className="section__content">
          <div className="des" data-aos="fade-up">
            <p
              dangerouslySetInnerHTML={{
                __html: t("developers.why_move.desc_p.p1"),
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: t("developers.why_move.desc_p.p2"),
              }}
            ></p>
          </div>
          <div className="card--table" data-aos="fade-up">
            <div className="table--feature">
              <div className="row row__title">
                <div className="column">{t("developers.why_move.table.row_1.0")}</div>
                <div className="column">{t("developers.why_move.table.row_1.1")}</div>
                <div className="column">{t("developers.why_move.table.row_1.2")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.why_move.table.row_2.0")}</div>
                <div className="column">{t("developers.why_move.table.row_2.1")}</div>
                <div className="column">{t("developers.why_move.table.row_2.2")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.why_move.table.row_3.0")}</div>
                <div className="column">{t("developers.why_move.table.row_3.1")}</div>
                <div className="column">{t("developers.why_move.table.row_3.2")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.why_move.table.row_4.0")}</div>
                <div className="column">{t("developers.why_move.table.row_4.1")}</div>
                <div className="column">{t("developers.why_move.table.row_4.2")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.why_move.table.row_5.0")}</div>
                <div className="column">{t("developers.why_move.table.row_5.1")}</div>
                <div className="column">{t("developers.why_move.table.row_5.2")}</div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
