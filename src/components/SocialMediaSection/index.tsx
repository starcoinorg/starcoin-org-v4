import InfiniteScrollingTexts from '@/components/InfiniteScrollingTexts';
import Social from '@/components/Social';

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
        <InfiniteScrollingTexts className="marquee--text1" text="JOIN OUR COMMUNITY TODAY! JOIN OUR COMMUNITY" />

        <div className="content">
          <p>{t('community.social_media.desc')}</p>
          <div className="section__title">
            <h3 dangerouslySetInnerHTML={{ __html: t('community.social_media.title') }}></h3>
          </div>
          <Social />
        </div>

        <InfiniteScrollingTexts className="marquee--text2" text="Where the Cool People Hang Out! Where the Cool People Hang Out!" />

      </div>
    </section>
  );
}
