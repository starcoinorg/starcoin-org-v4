import I18n, { type LocaleCode } from "@/i18n";
import featuresTrails from '@/images/features-trails.mp4'
import  { useState } from 'react';
export default function NewTrails({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);
  const [card, setCard] = useState('storage');
  const onRadioChange = (e:any) => {
    console.log(e.target.value);
    setCard(e.target.value);
  };
  return (
    <section className="section section--new-trails">
      <div id="new-trails" className="section__container new-trails__container">
        <div className="section__title" data-aos="fade-up">
          <h3 dangerouslySetInnerHTML={{ __html: t('features.new_trails.title') }}></h3>
        </div>
        <div className="section__content" >
          <input type="radio" className="sr-only" name="news" id="storage" value="storage"  checked={card === "storage"}
                onChange={onRadioChange} />
          <input type="radio" className="sr-only" name="news" id="easy-gas" value="easy-gas" checked={card === "easy-gas"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="dao"  value="dao" checked={card === "dao"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="billing"  value="billing" checked={card === "billing"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="bootstrapped"  value="bootstrapped" checked={card === "bootstrapped"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="stdlib" value="stdlib" checked={card === "stdlib"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="freely-nft"  value="freely-nft" checked={card === "freely-nft"}
                onChange={onRadioChange}/>
          <input type="radio" className="sr-only" name="news" id="verification"  value="verification"  checked={card === "verification"}
                onChange={onRadioChange}/>
          <ul className="news-lists" data-aos="fade-right">
            <li id="news__item--storage" >
              <label htmlFor="storage">
                {t('features.new_trails.news_title.0')}
              </label>
            </li>
            <li id="news__item--easy-gas">
              <label htmlFor="easy-gas">
                {t('features.new_trails.news_title.1')}
              </label>
            </li>
            <li id="news__item--dao">
              <label htmlFor="dao">
                {t('features.new_trails.news_title.2')}
              </label>
            </li>
            <li id="news__item--billing">
              <label htmlFor="billing">
                {t('features.new_trails.news_title.3')}
              </label>
            </li>
            <li id="news__item--bootstrapped">
              <label htmlFor="bootstrapped">
                {t('features.new_trails.news_title.4')}
              </label>
            </li>
            <li id="news__item--stdlib">
              <label htmlFor="stdlib">
                {t('features.new_trails.news_title.5')}
              </label>
            </li>
            <li id="news__item--freely-nft">
              <label htmlFor="freely-nft">
                {t('features.new_trails.news_title.6')}
              </label>
            </li>
            <li id="news__item--verification">
              <label htmlFor="verification">
                {t('features.new_trails.news_title.7')}
              </label>
            </li>
          </ul>
          <ul className="cards--new" data-aos="fade-left">
            <li id="card--storage">
              <svg>
                <use xlinkHref="#card1" href="#card1" />
              </svg>
              <p>
                {t('features.new_trails.news_content.0')}
              </p>
            </li>
            <li id="card--easy-gas">
              <svg>
                <use xlinkHref="#card2" href="#card2" />
                <p>
                  {t('features.new_trails.news_content.1')}
                </p>
              </svg>
            </li>
            <li id="card--dao">
              <svg>
                <use xlinkHref="#card3" href="#card3" />
              </svg>
              <p>
                {t('features.new_trails.news_content.2')}
              </p>
            </li>
            <li id="card--billing">
              <svg>
                <use xlinkHref="#card4" href="#card4" />
              </svg>
              <p>
                {t('features.new_trails.news_content.3')}
              </p>
            </li>
            <li id="card--bootstrapped">
              <svg>
                <use xlinkHref="#card5" href="#card5" />
              </svg>
              <p>
                {t('features.new_trails.news_content.4')}
              </p>
            </li>
            <li id="card--stdlib">
              <svg>
                <use xlinkHref="#card6" href="#card6" />
              </svg>
              <p>
                {t('features.new_trails.news_content.5')}
              </p>
            </li>
            <li id="card--freely-nft">
              <svg>
                <use xlinkHref="#card7" href="#card7" />
              </svg>
              <p>
                {t('features.new_trails.news_content.6')}
              </p>
            </li>
            <li id="card--verification">
              <svg>
                <use xlinkHref="#card8" href="#card8" />
              </svg>
              <p>
                {t('features.new_trails.news_content.7')}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay playsInline loop muted poster="">
          <source src={featuresTrails} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
