import Social from '@/components/Social';
import type { CSSProperties } from "react";
import I18n, { type LocaleCode } from "@/i18n";

export default function SocialMediaSection({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--social">
      


      <div className='marquee__container marquee__container--upper'>
        <div className="marquee marquee--text">
          <div className="marquee__item">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts1')}</div>
        </div>
      </div>
      <div className="section__container social__container">
        <div className="content">
          <p>{t('community.social_media.desc')}</p>
          <div className="section__title">
            <h3 dangerouslySetInnerHTML={{ __html: t('community.social_media.title') }}></h3>
          </div>
          <Social />
        </div>
        </div>
        <div className='marquee__container marquee__container--lower'>
        <div className="marquee marquee--text marquee--text2">
          <div className="marquee__item">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" aria-hidden="true">{t('community.social_media.infiniteScrollingTexts2')}</div>
        </div>
      </div>

     
    </section>
  );
}
