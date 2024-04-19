import React from "react";
import "./Header.css";
import Social from "@/components/Social";
import Navigation from "@/components/Navigation";
import Hamburg from "@/components/Hamburg";
import LanguageDropdownMenu from "@/components/LanguageDropdownMenu";

export default function Header() {
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
        <div className="nav--wrapper">
          <Navigation />
          <div className="item">
            <Social />
            <LanguageDropdownMenu />
          </div>
        </div>

        <Hamburg />
      </div>
    </header>
  );
}
