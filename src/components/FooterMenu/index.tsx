import nav_data from "@/assets/nav-data";

import I18n, { getRelativeLocaleUrl, type LocaleCode } from "@/i18n";

export default function FooterMenu({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale);

  return (
    <ul className="navigation navigation--footer">
      {nav_data.map((ng) => {
        return (
          <li className="dropdown" key={ng.group}>
            {/* <a href="/en/" className="dropdown__toggle">
              {t(ng.t_key)}
            </a> */}
            <div className="dropdown__toggle">
              {t(ng.t_key)}
            </div>
            <ul className="dropdown__content">
              {ng.links.map((nl) => {
                return (
                  <li key={nl.t_key}>
                    <a href={getRelativeLocaleUrl(locale, ng.href, nl.href)}>
                      {t(nl.t_key)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  );
}
