import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n';
// import homenews from '@/images/homenews.mp4';

// import newCardImage1 from '@/images/news01.png';
import newCardImage1 from "@/images/news01.webp";
// import newCardImage2 from '@/images/news02.png';
import newCardImage2 from "@/images/news02.webp";
// import newCardImage3 from '@/images/news03.png';
import newCardImage3 from "@/images/news03.webp";

export default function NewsSection({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--news">
      <div id="news" className="section__container news__container">
        <div className="section__title" data-aos="fade-up">
          <h3>{t('home.news.title')}</h3> 
          <small>{t('home.news.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="cards cards--news">
            <div className="card" data-aos="fade-right">
              <figure>
              <a href={getRelativeLocaleUrl(locale, "/news/post/starcoin-blockchain-functionality-restoration-update")} target="_blank">
                <img src={newCardImage1.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <div className="card__badge">
                  {t('new')}
                </div>
                <h4 className="card__title">
                  <a href={getRelativeLocaleUrl(locale, "/news/post/starcoin-blockchain-functionality-restoration-update")} target="_blank">
                  {t('home.news.card_1.title')}
                  </a>
                  
                </h4>
                <div className="card__date">{t('home.news.card_1.date')}</div>
                <div className="card__action">
                  <a href={getRelativeLocaleUrl(locale, "/news/post/starcoin-blockchain-functionality-restoration-update")} target="_blank" className="button button--primary">
                    {t('view_more')} 
                    <svg className="icon--arrow-right-long"><use xlinkHref="#arrow-right-long" href="#arrow-right-long" /></svg>
                  </a>
                </div>
              </div>

            </div>
            <div className="card" data-aos="fade-up"> 
              <figure>
              <a href={getRelativeLocaleUrl(locale, "/news/post/first-flexidag-pow-blockchain-in-move-ecosystem")} target="_blank">
                <img src={newCardImage2.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  <a href={getRelativeLocaleUrl(locale, "/news/post/first-flexidag-pow-blockchain-in-move-ecosystem")} target="_blank">
                  {t('home.news.card_2.title')}
                  </a>
                  
                </h4>
                <div className="card__date">{t('home.news.card_2.date')}</div>
              </div>
            </div>
            <div className="card" data-aos="fade-up">
              <figure>
              <a href={getRelativeLocaleUrl(locale, "/news/post/starcoin-2-revolutionizing-with-row-dag-join-our-testnet-to-experience-efficient-mining")} target="_blank">
                <img src={newCardImage3.src} alt="" />
                </a>
              </figure>
              <div className="card__content">
                <h4 className="card__title">
                  <a href={getRelativeLocaleUrl(locale, "/news/post/starcoin-2-revolutionizing-with-row-dag-join-our-testnet-to-experience-efficient-mining")} target="_blank">
                  {t('home.news.card_3.title')}
                  </a>
                </h4>
                <div className="card__date">{t('home.news.card_3.date')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="video--container">
        <video className="background-video" autoPlay loop playsInline muted poster="">
          <source src={homenews} type="video/mp4" />
        </video>
      </div> */}
    </section>
  );
}
