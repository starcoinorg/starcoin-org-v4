import { useState, useEffect, type MouseEvent } from "react";
import clsx from "clsx";
import I18n, {
  getRelativeLocaleUrl,
  isAbsoluteUrl,
  type LocaleCode,
} from "@/i18n";

import nav_data, { type NavGroup } from "@/assets/nav-data";

export default function Navigation({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);
  const [active_groups, set_active_groups] = useState<NavGroup["group"][]>([]);

  function change_active_group(evt: MouseEvent, ng: NavGroup) {
    evt.preventDefault();
    if (active_groups.includes(ng.group)) {
      set_active_groups(active_groups.filter((ag) => ag !== ng.group));
    } else {
      set_active_groups([...active_groups, ng.group]);
    }
  }

  const [cur_nav, set_cur_nav] = useState("/");

  useEffect(() => {
    let find_nav = "/";
    nav_data.forEach((nav) => {
      if (location.pathname.indexOf(nav.href) !== -1) {
        find_nav = nav.href;
      }
    });

    set_cur_nav(find_nav);
  }, []);

  return (
    <ul className="navigation navigation--header">
      {nav_data.map((o) => {
        return (
          <li className="dropdown" key={o.group}>
            <span
              className={clsx("dropdown__toggle", {
                open: active_groups.includes(o.group),
                active: cur_nav === o.href,
              })}
            >
              <a href={getRelativeLocaleUrl(locale, o.href)}>{t(o.t_key)}</a>
              <svg
                className="icon--arrow-right"
                onClick={(evt) => change_active_group(evt, o)}
              >
                <use xlinkHref="#arrow-right" href="#arrow-right" />
              </svg>
            </span>
            <ul className="dropdown__content">
              {o.links.map((l) => {
                return (
                  <li key={l.t_key}>
                    <a
                      href={
                        isAbsoluteUrl(l.href)
                          ? l.href
                          : getRelativeLocaleUrl(locale, o.href, l.href)
                      }
                    >
                      {t(l.t_key)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
