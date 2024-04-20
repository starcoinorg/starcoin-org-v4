import "./HomePageHero.css";
import StatisticsCard from "@/components/StatisticsCard";

import I18n, {type LocaleCode} from '@/i18n'

import img_hhm from '@/images/home-hero-mobile.png'
import img_hhd from '@/images/home-hero-desktop.png'

export default function HomePageHero({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="hero hero--home">
      <div className="hero__container section__container">
        <h2 className="hero__title">
          <p> {t('home.hero_title')} </p>
          <p dangerouslySetInnerHTML={{ __html: t('home.hero_subtitle') }} />
        </h2>
        <div className="hero__content">
          <p>
            Since 2020, Starcoin has been pioneering{" "}
            <strong>enhanced PoW </strong> consensus and <strong>Move smart contracts</strong>,
            ensuring secure, scalable blockchain infrastructure.
          </p>
          <p>
            Experience <strong>lightning-fast block</strong> generation with our <strong>FlexiDAG</strong> and
            <strong>TurboSTM</strong> technologies, fostering efficiency and reliability for Web3
            digital life, as we propel the digital economy forward with our
            commitment to decentralization and security.
          </p>
        </div>
        <div className="hero__action">
          <a href="#" className="button button--primary">Light Whitepapers</a>
          <a href="#" className="button button--outline">Get STC</a>
        </div>
        <StatisticsCard />
      </div>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={img_hhm.src}
          type="image/png"
        />

        <source
          media="(min-width: 769px)"
          srcSet={img_hhd.src}
          type="image/png"
        />

        <img src={img_hhd.src} alt="" />
      </picture>
    </section>
  );
}
