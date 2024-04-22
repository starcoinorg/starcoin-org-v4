import "./StarcoinRoadmap.css";

import I18n, { type LocaleCode } from "@/i18n";

export default function StarcoinRoadmap({
  locale
}: {
  locale: LocaleCode
}) {

  const t = I18n.create_trans(locale);

  return (
    <section className="section section--starcoin-roadmap">
      <div id="starcoin-roadmap" className="section__container starcoin-roadmap__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{__html: t('features.roadmap.title')}}></h3>
        </div>
        <div className="section__content">
          <div className="timeline">
            <div className="timeline__item">
              <div className="timeline__time">2018-2020</div>
              <div className="timeline__title">
                {t('features.roadmap.timeline_1.title')}
              </div>
              <div className="timeline__content">
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_1.ul.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_1.ul.1') }}></li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__time">2021</div>
              <div className="timeline__title">
                {t('features.roadmap.timeline_2.title')}
              </div>
              <div className="timeline__content">
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_2.ul.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_2.ul.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_2.ul.2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_2.ul.3') }}></li>
                </ul>
              </div>
            </div>


            <div className="timeline__item">
              <div className="timeline__time">2022</div>
              <div className="timeline__title">
                {t('features.roadmap.timeline_3.title')}
              </div>
              <div className="timeline__content">
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_3.ul.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_3.ul.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_3.ul.2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_3.ul.3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_3.ul.4') }}></li>
                </ul>
              </div>
            </div>

            <div className="timeline__item">
              <div className="timeline__time">2023</div>
              <div className="timeline__title">
                {t('features.roadmap.timeline_4.title')}
              </div>
              <div className="timeline__content">
                <p>{t('features.roadmap.timeline_4.p1')}</p>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_1.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_1.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_1.2') }}></li>
                </ul>
                <p>{t('features.roadmap.timeline_4.p2')}</p>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.4') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.5') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_2.6') }}></li>
                </ul>
                <p>{t('features.roadmap.timeline_4.p3')}</p>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.4') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_3.5') }}></li>
                </ul>
                <p>{t('features.roadmap.timeline_4.p4')}</p>
                <ul>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_4.0') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_4.1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_4.2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_4.3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html: t('features.roadmap.timeline_4.ul_4.4') }}></li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
