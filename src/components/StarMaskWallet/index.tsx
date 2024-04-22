import './StarMaskWallet.css';

import Download from '@/components/Download';

import I18n, { type LocaleCode } from "@/i18n";

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
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{ __html: t('getstc.star_mask.title') }}></h3>
        </div>
        <div className="section__content">
          <div className="content">
            <p>{t('getstc.star_mask.content.0')}</p>
            <p>{t('getstc.star_mask.content.1')}</p>
          </div>

          <Download locale={locale} />
          
          <div className="actions">
            <button className="button button--primary">
              {t('getstc.star_mask.action.install')}
            </button>
            <button className="button button--outline">
              {t('getstc.star_mask.action.use')}
            </button>
          </div>
          <h5 dangerouslySetInnerHTML={{ __html: t('getstc.star_mask.dt.0.title') }}></h5>
          <p dangerouslySetInnerHTML={{
            __html: t('getstc.star_mask.dt.0.desc', {
              onekey_url
            })
          }}>
          </p>
        </div>
      </div>

      <figure>
        <img src="https://picsum.photos/1920/1024?random=4" alt="" />
      </figure>
    </section>
  );
}
