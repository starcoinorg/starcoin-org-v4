import I18n, { type LocaleCode } from "@/i18n";

import testImage from '@/images/Home_03HighPerformance.png';

export default function NodeMining({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)
  const gate_url = 'https://www.gate.io/'
  const coinex_url = 'https://www.coinex.com/'
  const starswap_url = 'https://starswap.xyz/'

  return (
    <section className="section section--node-mining">
      <div id="node-mining" className="node-mining__container section__container">
        <div className="section__title">
          <h4 dangerouslySetInnerHTML={{ __html: t('getstc.node_mining.title') }}></h4>
          <small>{t('getstc.node_mining.subtitle')}</small>
        </div>
        <div className="section__content">
          <div className="mining__data">
            <ul>
              <li>
                <h5>{t('getstc.node_mining.data.0.name')}</h5>
                <p>{t('getstc.node_mining.data.0.content')}</p>
              </li>
              <li>
                <h5>{t('getstc.node_mining.data.1.name')}</h5>
                <p>{t('getstc.node_mining.data.1.content')}</p>
              </li>
              <li>
                <h5>{t('getstc.node_mining.data.2.name')}</h5>
                <p>{t('getstc.node_mining.data.2.content')}</p>
              </li>
              <li>
                <h5>{t('getstc.node_mining.data.3.name')}</h5>
                <p>{t('getstc.node_mining.data.3.content')}</p>
              </li>
              <li>
                <h5>{t('getstc.node_mining.data.4.name')}</h5>
                <p>{t('getstc.node_mining.data.4.content')}</p>
              </li>
              <li>
                <h5>{t('getstc.node_mining.data.5.name')}</h5>
                <p>{t('getstc.node_mining.data.5.content')}</p>
              </li>
            </ul>
          </div>
          <div className="mining__des">
            <p>{t('getstc.node_mining.desc.0')}</p>
            <p>{t('getstc.node_mining.desc.1')}</p>
          </div>
          <div className="cards cards--mining">
            <figure>
              <img src={testImage.src} alt="" />
            </figure>
            <div className="card">
              <div className="card__media">
                <svg>
                  <use xlinkHref="#card9" href="#card9" />
                </svg>
                <h5>{t('getstc.node_mining.card.0.title')}</h5>
              </div>
              <div className="card__content">
                <p dangerouslySetInnerHTML={{
                  __html: t('getstc.node_mining.card.0.content.0', {
                    gate_url,
                    coinex_url
                  })
                }}>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__media">
                <svg>
                  <use xlinkHref="#card10" href="#card10" />
                </svg>
                <h5>{t('getstc.node_mining.card.0.title')}</h5>
              </div>
              <div className="card__content">
                <p dangerouslySetInnerHTML={{
                  __html: t('getstc.node_mining.card.1.content.0', {
                    starswap_url
                  })
                }}>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
