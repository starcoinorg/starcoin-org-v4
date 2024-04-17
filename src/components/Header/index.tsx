import React from "react";
import "./Header.css";
import Social from "../Social/index.tsx";
import Navigation from "../Navigation/index.tsx";
import Hamburg from "../Hamburg/index.tsx";
import LanguageDropdownMenu from "../LanguageDropdownMenu/index.tsx";

export default function Header() {
  return (
    <header className="page--header">
      <div className="header--container">
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
          <LanguageDropdownMenu />
        </div>

        <Hamburg />
      </div>
    </header>
  );
}
