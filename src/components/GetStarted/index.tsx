import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'

export default function ChooseStarstack({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--getstarted section">
      <div id="get-started" className="section__container getstarted__container">
        <div className="section__title" data-aos="fade-up">
          <h3 dangerouslySetInnerHTML={{ __html: t('home.get_started.title') }}></h3>
        </div>
        <div className="section__content">
          <ul>
            <li data-aos="fade-right">
              <h4 >
                <a  href={getRelativeLocaleUrl(locale, "/developers", "#easy-building")} target="_blank" dangerouslySetInnerHTML={{ __html: t('home.get_started.li_1.h4') }}></a>
              </h4>
              <p>{t('home.get_started.li_1.p')}</p>
              
            </li>
            <li data-aos="fade-left">
              <h4 >
                <a href={getRelativeLocaleUrl(locale, "/getstc", "#node-mining")} target="_blank" dangerouslySetInnerHTML={{ __html: t('home.get_started.li_2.h4') }}></a>
              </h4>
              <p>{t('home.get_started.li_2.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 >
                <a href={getRelativeLocaleUrl(locale, "/getstc", "#node-mining")} target="_blank" dangerouslySetInnerHTML={{ __html: t('home.get_started.li_3.h4') }}></a>
              </h4>
              <p>{t('home.get_started.li_3.p')}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
