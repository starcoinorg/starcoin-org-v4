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
      <div className="section__container social__container">


      <div className='marquee__container' style={{ '--count': 7,  '--speed': 50} as CSSProperties}>
        <div className="marquee marquee--text">
          <div className="marquee__item" style={{ '--index': 0 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 1 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 2 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 3 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 4 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 5 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
          <div className="marquee__item" style={{ '--index': 6 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts1')}</div>
        </div>
      </div>

        <div className="content">
          <p>{t('community.social_media.desc')}</p>
          <div className="section__title">
            <h3 dangerouslySetInnerHTML={{ __html: t('community.social_media.title') }}></h3>
          </div>
          <Social />
        </div>

        <div className='marquee__container' style={{ '--count': 7,  '--speed': 50} as CSSProperties}>
        <div className="marquee marquee--text marquee--text2">
          <div className="marquee__item" style={{ '--index': 0 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 1 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 2 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 3 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 4 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 5 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
          <div className="marquee__item" style={{ '--index': 6 } as CSSProperties}>{t('community.social_media.infiniteScrollingTexts2')}</div>
        </div>
      </div>

      </div>
    </section>
  );
}
