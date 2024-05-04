import Download from '@/components/Download';

import I18n, { type LocaleCode } from "@/i18n";
import getstcWallet from '@/images/getstc-wallet.mp4';

export default function StarMaskWallet({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)
  const onekey_url = 'https://www.onekey.so/'

  return (
    <section className="section section-star-mask-wallet">
      <div id="starmask-wallet" className="section__container star-mask-wallet__container">
        <div className="section__title" data-aos="fade-up">
          <h3 dangerouslySetInnerHTML={{ __html: t('getstc.star_mask.title') }}></h3>
        </div>
        <div className="section__content">
          <div className="content" data-aos="fade-up">
            <p>{t('getstc.star_mask.content.0')}</p>
            <p>{t('getstc.star_mask.content.1')}</p>
          </div>

          <Download locale={locale} />
          
          <div className="actions" data-aos="fade-up">
            <a href="https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-install.md" target="_blank" className="button button--primary">
              {t('getstc.star_mask.action.install')}
            </a>
            <a href="https://github.com/starcoinorg/starmask-extension/blob/main/docs/en/how-to-use.md" target="_blank" className="button button--outline">
              {t('getstc.star_mask.action.use')}
            </a>
          </div>
          <h5 dangerouslySetInnerHTML={{ __html: t('getstc.star_mask.dt.0.title') }} data-aos="fade-up"></h5>
          <p dangerouslySetInnerHTML={{
            __html: t('getstc.star_mask.dt.0.desc', {
              onekey_url
            })
          }} data-aos="fade-up">
          </p>
        </div>
      </div>

      <div className="video--container">
        <div className="video--wrapper">
        <video className="background-video" playsInline autoPlay loop muted poster="">
          <source src={getstcWallet} type="video/mp4" />
        </video>
        </div>
      </div>
    </section>
  );
}
