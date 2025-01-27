import I18n, { getRelativeLocaleUrl, type LocaleCode } from "@/i18n";
import CreateBusiness from "@/images/creative-business.webp";

export default function NeedHelp({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section--need-help section">
      <div id="connect" className="section__container need-help__container">
        <div className="section__title" data-aos="fade-left">
          <h3>
            <strong
              dangerouslySetInnerHTML={{
                __html: t("starstack.NeedHelp.title"),
              }}
            ></strong>
            <p
              dangerouslySetInnerHTML={{
                __html: t("starstack.NeedHelp.subtitle"),
              }}
            ></p>
          </h3>
          <div className="need-help--action">
          <a
            target="_blank"
            // href={whitePaper}
            className="button button--primary">
            {t("starstack.NeedHelp.action.apply")}
          
          </a>
          </div>
          <ul className="social">
            <li>
              <a href="http://t.me/Starcoin_STC" target="_blank">
                <svg className="icon icon--telegram">
                  <use xlinkHref="#telegram" href="#telegram" />
                </svg>
                <span className="sr-only">telegram</span>
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/XJYmhRMQya" target="_blank">
                <svg className="icon icon--discord">
                  <use xlinkHref="#discord" href="#discord" />
                </svg>
                <span className="sr-only">discord</span>
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/XJYmhRMQya" target="_blank">
                <svg className="icon icon--email">
                  <use xlinkHref="#email" href="#email" />
                </svg>
                <span className="sr-only">email</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="section__content" data-aos="fade-right">
          <figure>
            <img src={CreateBusiness.src} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}
