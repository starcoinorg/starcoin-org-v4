// import I18n, { type LocaleCode } from "@/i18n";
import I18n, { getRelativeLocaleUrl, type LocaleCode } from "@/i18n";

import oneChainDao from '@/images/onechaindao.png';

export default function OneChainDAO({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--one-chain-dao" id="one-chain-dao">
      <div id="one-chain-dao" className="section__container one-chain-dao__container">
        <div className="content">
        <div className="section__title">
          <small>{t('getstc.oc_dao.subtitle')}</small>
          <h3>
            <a href={getRelativeLocaleUrl(locale, "/community","#one-chain-dao")} dangerouslySetInnerHTML={{ __html: t('getstc.oc_dao.title') }}></a>
          </h3>
        </div>
        <div className="section__content">
          <p>{t('getstc.oc_dao.content.0')}</p>
        </div>
        </div>
        <figure>
        <a href={getRelativeLocaleUrl(locale, "/community","#one-chain-dao")} >
          <img src={oneChainDao.src} alt="" />
          </a>
        </figure>
      </div>
    </section>
  );
}
