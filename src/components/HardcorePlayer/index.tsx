import './HardcorePlayer.css';

import I18n, { type LocaleCode } from "@/i18n";

export default function HardcorePlayer({
  locale
}: {
  locale: LocaleCode
}) {

  const t = I18n.create_trans(locale)

  return (
    <section className="section section--hardcore-player" id="hardcore-player">
      <div className="section__container hardcore-player__container">
        <div className="section__title">
          <h3 dangerouslySetInnerHTML={{__html: t('getstc.hc_player.title')}}></h3>
        </div>
        <div className="section__content">
          <p>{t('getstc.hc_player.content.0')}</p>
          <button className="button button--outline">
            {t('getstc.hc_player.content.1')}
          </button>
        </div>
      </div>
    </section>
  );
}
