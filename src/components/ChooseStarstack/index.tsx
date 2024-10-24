import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'

export default function ChooseStarstack({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--choose-starstack section">
      <div id="choose-starstack" className="section__container choose-starstack__container">
        <div className="section__title" >
          <h3 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.title') }} data-aos="fade-up"></h3>
          <small dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.des') }} data-aos="fade-up"></small>
        </div>
        <div className="section__content">
          <ul>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.li_1.h4') }}></h4>
              <p>{t('starstack.ChooseStarstack.li_1.p')}</p>
              
            </li>
            <li data-aos="fade-left">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.li_2.h4') }}></h4>
              <p>{t('starstack.ChooseStarstack.li_2.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.li_3.h4') }}></h4>
              <p>{t('starstack.ChooseStarstack.li_3.p')}</p>
            </li>
            <li data-aos="fade-left">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.li_4.h4') }}></h4>
              <p>{t('starstack.ChooseStarstack.li_4.p')}</p>
            </li>
            <li data-aos="fade-right">
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.ChooseStarstack.li_5.h4') }}></h4>
              <p>{t('starstack.ChooseStarstack.li_5.p')}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
