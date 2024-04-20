import { useState, type MouseEvent } from "react";
import clsx from "clsx";
import I18n, { type LocaleCode } from "@/i18n";

import nav_data, { type NavGroup } from "./nav-data";

export default function Navigation({ locale }: { locale: LocaleCode }) {
  const t = I18n.create_trans(locale);
  const [active_groups, set_active_groups] = useState<NavGroup['group'][]>([]);

  function change_active_group(evt: MouseEvent, ng: NavGroup) {
    evt.preventDefault();
    if (active_groups.includes(ng.group)) {
      set_active_groups(active_groups.filter(ag => ag !== ng.group));
    } else {
      set_active_groups([...active_groups, ng.group])
    }
  }

  return (
    <ul className="navigation navigation--header">
      {nav_data.map((o) => {
        return (
          <li className="dropdown" key={o.group}>
            <span
              className={clsx("dropdown__toggle", {
                active: active_groups.includes(o.group),
              })}
            >
              <a href={o.href}>{t(o.t_key)}</a>
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
                    <a href={l.href}>{t(l.t_key)}</a>
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
