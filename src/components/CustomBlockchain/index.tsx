import I18n, {getRelativeLocaleUrl, type LocaleCode } from '@/i18n'
import CustomBlockchainFigure from "@/images/custom-blockchain.webp";
import blockchain from "@/images/starstack02.mp4";
import blockchainPoster from "@/images/starstack02.webp";

export default function CustomBlockchain({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section--custom-blockchain section">
      <div id="custom-blockchain" className="section__container custom-blockchain__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('starstack.CustomBlockchain.title') }} data-aos="fade-up"></h3>
          <small dangerouslySetInnerHTML={{ __html: t('starstack.CustomBlockchain.des') }} data-aos="fade-up"></small>
        </div>
        <div className="section__content">
          <div className="cards cards--blockchain" data-aos="fade-up">
            <figure>
            <img src={CustomBlockchainFigure.src} alt="" />
            </figure>
            <div className='card card-1'>
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.CustomBlockchain.card1.title') }}></h4>
              <p>{t('starstack.CustomBlockchain.card1.des')}</p>
              
            </div>
            <div   className='card card-2' >
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.CustomBlockchain.card2.title') }}></h4>
              <p>{t('starstack.CustomBlockchain.card2.des')}</p>
            </div>
            <div  className='card card-3' >
              <h4 dangerouslySetInnerHTML={{ __html: t('starstack.CustomBlockchain.card3.title') }}></h4>
              <p>{t('starstack.CustomBlockchain.card3.des')}</p>
            </div>
          </div>
          <div className="custom-blockchain__action">
           <a
            target="_blank"
            // href={whitePaper}
            className="button button--primary"
            data-aos="fade-up">
            {t("starstack.CustomBlockchain.action.documentation")}
          
          </a>
          <a
            // href={getRelativeLocaleUrl(locale, "/getstc")}
            href="https://github.com/starcoinorg"
            target='_blank'
            className="button button--outline"
            data-aos="fade-up" data-aos-delay="150">
            {t("starstack.CustomBlockchain.action.github")}
          </a>
          <a
            // href={getRelativeLocaleUrl(locale, "/getstc")}
            className="button button--outline"
            data-aos="fade-up" data-aos-delay="150">
            {t("starstack.CustomBlockchain.action.developerForums")}
          </a>
          <a
            href={getRelativeLocaleUrl(locale, "/community")}
            className="button button--outline"
            data-aos="fade-up" data-aos-delay="150">
            {t("starstack.CustomBlockchain.action.community")}
          </a>
        </div>
        </div>
      </div>
      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" autoPlay loop playsInline muted poster={blockchainPoster.src}>
          <source src={blockchain} type="video/mp4" />
        </video>
      </div>
      </div>
    </section>
  );
}
