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
          <p> {t('home.hero.title')} </p>
          <p dangerouslySetInnerHTML={{ __html: t('home.hero.subtitle') }} />
        </h2>
        <div className="hero__content">
          <p dangerouslySetInnerHTML={{__html: t('home.hero.desc_p1')}} />
          <p dangerouslySetInnerHTML={{__html: t('home.hero.desc_p2')}} />
        </div>
        <div className="hero__action">
          <a href="#" className="button button--primary">
            {t('home.hero.action.whitepaper')}
          </a>
          <a href="#" className="button button--outline">
            {t('home.hero.action.getstc')}
          </a>
        </div>
        <StatisticsCard locale={locale} />
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
