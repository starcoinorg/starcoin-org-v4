import "./Header.css";
import Social from "@/components/Social";
import Navigation from "@/components/Navigation";
import Hamburg from "@/components/Hamburg";
import LanguageDropdownMenu from "@/components/LanguageDropdownMenu";

import { useState } from "react";
import I18n, { type LocaleCode } from "@/i18n";
import clsx from "clsx";

export default function Header({
  locale
}: {
  locale: LocaleCode
}) {

  const [nav_show, set_nav_show] = useState(false)

  function change_nav_show(s: boolean) {
    set_nav_show(s)
  }

  return (
    <header className="page--header">
      <div className="header__container section__container">
        <h1 id="logo" className="logo">
          <a href="/en/">
            <svg>
              <use xlinkHref="#logo" href="#logo" />
            </svg>
          </a>
        </h1>
        <div className={clsx('nav--wrapper', {open: nav_show})}>
          <Navigation locale={locale} />
          <div className="item">
            <Social />
            <LanguageDropdownMenu locale={locale} />
          </div>
        </div>

        <Hamburg onChange={change_nav_show} />
      </div>
    </header>
  );
}
