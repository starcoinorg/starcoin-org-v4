import I18n, { type LocaleCode } from "@/i18n";

import testImage from '@/images/Home_01EnhancedPowConsensus.png';

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
          <h3 dangerouslySetInnerHTML={{ __html: t('getstc.oc_dao.title') }}></h3>
        </div>
        <div className="section__content">
          <p>{t('getstc.oc_dao.content.0')}</p>
        </div>
        </div>
        <figure>
          <img src={testImage.src} alt="" />
        </figure>
      </div>
    </section>
  );
}
