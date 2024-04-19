import React from "react";
import "./Header.css";
import Social from "../Social";
import Navigation from "../Navigation";
import Hamburg from "../Hamburg";
import LanguageDropdownMenu from "../LanguageDropdownMenu";

import I18n, { type LocaleCode } from "@/i18n";

export default function Header({
  locale
}: {
  locale: LocaleCode
}) {
  return (
    <header className="page--header">
      <div className="header__container section__container">
        <h1 id="logo" className="logo">
          <a href="/">
            <svg>
              <use xlinkHref="#logo" href="#logo" />
            </svg>
          </a>
        </h1>
        <Navigation />
        <div className="item">
          <Social />
          <LanguageDropdownMenu locale={locale} />
        </div>

        <Hamburg />
      </div>
    </header>
  );
}
