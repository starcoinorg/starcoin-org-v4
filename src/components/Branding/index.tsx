import I18n, { type LocaleCode } from "@/i18n";
import communityBranding from "@/images/community-branding.mp4";
import communityVideoPoster3 from "@/images/community-video-3.png";
export default function Branding({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);

  return (
    <section className="section section--branding">
      <div id="branding" className="section__container branding__container">
        <div className="card--branding" data-aos="flip-up">
          <div className="branding__title">
            <h4
              dangerouslySetInnerHTML={{
                __html: t("community.branding.title"),
              }}
            ></h4>
          </div>
          <div className="branding__content">
            <p>{t("community.branding.content")}</p>
            <button className="button button--outline">
              {t("community.branding.action")}
            </button>
          </div>
          <a href="mailto:hr@westar.io">
            <span>hr@westar.io</span>
            <i className="icon--send">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </i>
          </a>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            poster={communityVideoPoster3.src}
          >
            <source src={communityBranding} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
