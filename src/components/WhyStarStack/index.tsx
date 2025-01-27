import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'

export default function WhyStarStack({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--choose-starstack section section--why-starStack">
      <div id="why-starStack" className="section__container choose-starstack__container why-starStack__container">
        <div className="section__title" >
          <h3 dangerouslySetInnerHTML={{ __html: t('starstack.why_starStack.title') }} data-aos="fade-up"></h3>
          <small dangerouslySetInnerHTML={{ __html: t('starstack.why_starStack.des') }} data-aos="fade-up"></small>
        </div>
        <div className="section__content">
          <ul>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.why_starStack.li_1.h4') }}></h4>
              <p>{t('starstack.why_starStack.li_1.p')}</p>
              
            </li>
            <li data-aos="fade-left">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.why_starStack.li_2.h4') }}></h4>
              <p>{t('starstack.why_starStack.li_2.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.why_starStack.li_3.h4') }}></h4>
              <p>{t('starstack.why_starStack.li_3.p')}</p>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}
