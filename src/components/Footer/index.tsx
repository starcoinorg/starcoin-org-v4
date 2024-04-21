import "./Footer.css";

import FooterMenu from "@/components/FooterMenu";
import Social from "@/components/Social";
import I18n, { type LocaleCode } from "@/i18n";

export default function Footer({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);  

  return (
    <footer className="page--footer">
      <div className="footer__container section__container">
        <FooterMenu locale={locale} />
        <Social />
        <p>&copy; {t('site.copyright')}</p>
      </div>
    </footer>
  );
}
