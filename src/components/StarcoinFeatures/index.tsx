import FeatureTable from '@/components/FeatureTable';
import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n';


// import home1 from '@/images/home_01EnhancedPowConsensus.png';
import home1 from "@/images/home_01EnhancedPowConsensus.webp";
// import home2 from '@/images/home_02MoveSmartContract.png';
import home2 from "@/images/home_02MoveSmartContract.webp";


export default function StarcoinFeatures({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--starcoin-features">
      <a id="features" className="section__container starcoin-features__container" href={getRelativeLocaleUrl(locale, "/features")} target="_blank">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('home.features.title') }} data-aos="fade-up"></h3>
          <small data-aos="fade-up">{t('home.features.subtitle')}</small>
        </div>
        <div className="section__content">
          <p data-aos="fade-up">{t('home.features.desc')}</p>
          <div className="cards cards--features">
            <div className="card" data-aos="fade-up">
              <figure className="card__media">
                <img src={home1.src} alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">{t('home.features.card_1.h4')}</h4>
                <p>{t('home.features.card_1.p')}</p>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <figure className="card__media">
                <img src={home2.src} alt="" />
              </figure>
              <div className="card__content">
                <h4 className="card__title">{t('home.features.card_2.h4')}</h4>
                <p>{t('home.features.card_2.p')}</p>
              </div>
            </div>
          </div>
          <div className="card--parallelization" data-aos="fade-up">
            <div className="card__title">
              {t('home.features.table.title')}
            </div>
            <div className="card__content">
              <p>{t('home.features.table.desc')}</p>
              <FeatureTable locale={locale} />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
