import I18n, { type LocaleCode } from "@/i18n";
import feature1 from '@/images/features_01EnhancedPowConsensus.png';
import feature2 from '@/images/features_02Movesmart.png'
import feature3 from '@/images/features_03High.png';
import featureFlexi from '@/images/features_flexi.png';
import featureTurbo from '@/images/feature_turbo_stm.png';

export default function FeatureSection({
  locale
}: {
  locale: LocaleCode
}) {

  const t = I18n.create_trans(locale);

  return (
    <section className="section section--feature">
      <div id="features" className="section__container feature__container">
        <div className="section__title">
          <h3>{t('features.features.title')}</h3>
          <small>{t('features.features.desc')}</small>
        </div>
        <div className="section__content">
          <div className="cards cards--feacures">
            <div className="card">
              <figure>
                <img src={feature1.src} alt="" />
              </figure>
              <h4 className="card__title">
                {t('features.features.card_1.title')}
              </h4>
              <div className="card__content">
                <p>
                  {t('features.features.card_1.content_p1')}
                </p>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src={feature2.src} alt="" />
              </figure>
              <h4 className="card__title">
                {t('features.features.card_2.title')}
              </h4>
              <div className="card__content">
                <p>{t('features.features.card_2.content_p1')}</p>
              </div>
            </div>

            <div className="card">
              <figure>
                <img src={feature3.src} alt="" />
              </figure>
              <h4 className="card__title">
                {t('features.features.card_3.title')}
              </h4>
              <div className="card__content">
                <p>{t('features.features.card_3.content_p1')}</p>
                <div className="sub-cards sub-cards--features">
                  <div className="sub-card">
                    <h5 className="sub-card__title">
                      {t('features.features.card_3.sub_card_1.title')}
                    </h5>
                    <figure className="sbu-card__media">
                      <img src={featureFlexi.src} alt="" />
                    </figure>
                    <div className="sub-card__content">
                      <p>
                        {t('features.features.card_3.sub_card_1.content_p1')}
                      </p>
                      <ul>
                        <li>
                          {t('features.features.card_3.sub_card_1.content_ul.0')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_1.content_ul.1')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_1.content_ul.2')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_1.content_ul.3')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_1.content_ul.4')}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="sub-card">
                    <h5 className="sub-card__title">
                      {t('features.features.card_3.sub_card_2.title')}
                    </h5>
                    <figure className="sbu-card__media">
                      <img src={featureTurbo.src} alt="" />
                    </figure>
                    <div className="sub-card__content">
                      <p>{t('features.features.card_3.sub_card_2.content_p1')}</p>
                      <ul>
                        <li>
                          {t('features.features.card_3.sub_card_2.content_ul.0')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_2.content_ul.1')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_2.content_ul.2')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_2.content_ul.3')}
                        </li>
                        <li>
                          {t('features.features.card_3.sub_card_2.content_ul.4')}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
