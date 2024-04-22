import './EcosystemPartners.css';

import I18n, { type LocaleCode } from "@/i18n";

export default function EcosystemPartners({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)
  
  return (
    <section className="section section--ecosystem-partners" id="ecosystem-partners">
      <div className="section__container ecosystem-partners__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('community.partners.title')}}></h3>
        </div>
        <div className="section__content">
          <figure>
            <img src="https://picsum.photos/1920/1024?random=2" alt="" />
          </figure>
          <p>{t('community.partners.content.0')}</p>
        </div>
      </div>
    </section>
    
  );
}
