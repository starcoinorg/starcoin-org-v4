import I18n, { type LocaleCode } from "@/i18n";
import communityBranding from '@/images/community-branding.mov';

export default function Branding({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--branding">
      <div id="branding" className="section__container branding__container">
        <div className="card--branding">
          <div className="branding__content">
            <h4 dangerouslySetInnerHTML={{ __html: t('community.branding.title') }}></h4>
            <p>{t('community.branding.content')}</p>
            <button className="button button--outline">
              {t('community.branding.action')}
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
        <video className="background-video" autoPlay loop muted poster="">
          <source src={communityBranding} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
