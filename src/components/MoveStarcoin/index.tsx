import I18n, { type LocaleCode } from "@/i18n";

// import testImage from '@/images/home_03HighPerformance.png';
// import highPerformance from "@/images/home_03HighPerformance.webp";

export default function MoveStarcoin({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--move-starcoin">
      <div id="move-starcoin" className="move-starcoin__container section__container">
        <div className="section__title">
          <h4
            dangerouslySetInnerHTML={{ __html: t("developers.move_starcoin.title") }}
            data-aos="fade-up"
          ></h4>
        </div>
        <div className="section__content">
          <div className="des" data-aos="fade-up">
            <p
              dangerouslySetInnerHTML={{
                __html: t("developers.move_starcoin.desc_p"),
              }}
            ></p>
            
          </div>
          <div className="card--table" data-aos="fade-up">
            <div className="table--feature">
              <div className="row row__title">
                <div className="column">{t("developers.move_starcoin.table.row_1.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_1.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_1.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_1.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_1.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_2.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_2.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_2.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_2.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_2.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_3.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_3.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_3.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_3.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_3.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_4.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_4.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_4.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_4.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_4.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_5.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_5.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_5.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_5.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_5.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_6.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_6.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_6.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_6.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_6.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_7.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_7.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_7.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_7.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_7.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_8.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_8.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_8.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_8.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_8.4")}</div>
              </div>

              <div className="row row__content">
                <div className="column">{t("developers.move_starcoin.table.row_9.0")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_9.1")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_9.2")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_9.3")}</div>
                <div className="column">{t("developers.move_starcoin.table.row_9.4")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
