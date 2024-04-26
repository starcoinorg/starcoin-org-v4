import clsx from "clsx";
import I18n, { type LocaleCode } from "@/i18n";
import { useState, useEffect } from "react";
import type { MouseEvent, CSSProperties } from "react";

export default function LanguageDropdownMenu({
  locale,
}: {
  locale: LocaleCode;
}) {
  const locale_list = I18n.config.locale_list;
  const cur_locale = I18n.pick_current_locale(locale);
  const cur_locale_object = locale_list.find((lc) => lc.code === cur_locale);
  const [open, set_open] = useState(false);

  function toggle_open() {
    set_open(!open);
  }

  function set_locale_path(lc: LocaleCode) {
    if (lc === cur_locale_object?.code) {
      set_open(false);
      return;
    }
    I18n.set_locale_path(lc, cur_locale_object?.code);
  }

  useEffect(() => {
    function close() {
      set_open(false);
    }

    window.addEventListener("touchend", close);
    window.addEventListener("click", close);

    return () => {
      window.removeEventListener("touchend", close);
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <div className="dropdown dropdown--language">
      <button className="dropdown__toggle" onClick={toggle_open}>
        <span>{cur_locale_object?.label}</span>
        <svg className="icon icon--down">
          <use xlinkHref="#angle-down" href="#angle-down" />
        </svg>
      </button>

      <div
        className={clsx("dropdown__content", { active: open })}
        style={{ "--options": locale_list.length } as CSSProperties}
      >
        {locale_list.map((lc) => {
          return (
            <div
              key={lc.code}
              className={clsx("option", { active: cur_locale === lc.code })}
              onClick={() => set_locale_path(lc.code)}
            >
              {lc.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
